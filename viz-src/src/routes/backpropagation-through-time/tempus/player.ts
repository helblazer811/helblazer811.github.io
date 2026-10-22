/**
 * Player — the transport layer over an immutable Timeline.
 *
 * Holds:
 *   - `t` (normalized playhead) and `time` (seconds), tracked across ticks
 *   - `isPlaying`, `isAtEnd`
 *   - `looping`, `endPause` — transport behaviors (mutable at runtime)
 *   - the requestAnimationFrame clock
 *   - `onTick` subscribers
 *   - an `overlay` for ephemeral interaction clips
 *
 * The authored Timeline is structurally immutable. To change structure mid-
 * playback, build a new Timeline and call `player.attach(newTimeline)`;
 * `t` and `isPlaying` are preserved.
 *
 * For transient state injection (hover effects, click flashes), prefer
 * `player.overlay.add(...)`.
 *
 * No gates / `waitForInput` / `isSeeking` here — those were merged
 * concerns in the old design and are gone. TimeSlider implements drag-
 * pause locally; figures that want pause-on-event subscribe to onTick.
 */
import type { Timeline, ClipKind } from './timeline';
import { Overlay } from './overlay';

// ===== Clock =====
// Owns the requestAnimationFrame loop and provides delta time in seconds.
export class Clock {
  private rafId: number | null = null;
  private lastTime: number | null = null;

  start(onTick: (dt: number) => void): void {
    const loop = (ts: number) => {
      if (this.lastTime === null) this.lastTime = ts;
      const dt = (ts - this.lastTime) / 1000;
      this.lastTime = ts;

      onTick(dt);
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  stop(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.lastTime = null;
  }

  get isRunning(): boolean {
    return this.rafId !== null;
  }
}

export type PlayerOptions = {
  /** Loop back to t=0 on reaching t=1 (after `endPause`). Default false. */
  looping?: boolean;
  /** Seconds to hold at t=1 before looping. Default 0. Only meaningful if
   *  looping is true. */
  endPause?: number;
};

export type TickCallback<TState> = (t: number, state: Readonly<TState>) => void;

export class Player<TState> {
  // ---- Held Timeline (swappable via attach) ----
  private _timeline: Timeline<TState>;

  // ---- Transport behavior (mutable) ----
  /** Loop back to t=0 on reaching t=1 (after `endPause`). */
  looping: boolean;
  /** Seconds to hold at t=1 before looping. Only meaningful if looping. */
  endPause: number;

  // ---- Internal transport state ----
  private _t = 0;                      // normalized [0, 1]
  private _isPlaying = false;
  private _endPauseRemaining = 0;
  private _cachedState: TState | null = null;

  private clock = new Clock();
  private tickCallbacks: Set<TickCallback<TState>> = new Set();

  // ---- Overlay ----
  readonly overlay: Overlay<TState>;

  constructor(timeline: Timeline<TState>, opts: PlayerOptions = {}) {
    this._timeline = timeline;
    this.looping = opts.looping ?? false;
    this.endPause = opts.endPause ?? 0;
    this.overlay = new Overlay<TState>();
    this.overlay._timelineDurationSec = timeline.duration;
  }

  // ---- Read-only accessors ----

  get timeline(): Timeline<TState> {
    return this._timeline;
  }

  /** Normalized playhead in [0, 1]. */
  get t(): number {
    return this._t;
  }

  /** Playhead in seconds. */
  get time(): number {
    return this._t * this._timeline.duration;
  }

  get isPlaying(): boolean {
    return this._isPlaying;
  }

  get isAtEnd(): boolean {
    return this._t >= 1;
  }

  /** Composed state at the current playhead: Timeline.stateAt(t), then the
   *  overlay's clips merged in insertion order (last-wins). Cached per tick. */
  get state(): Readonly<TState> {
    if (this._cachedState === null) {
      this._cachedState = this.resolveComposedState();
    }
    return this._cachedState;
  }

  // ---- Transport controls ----

  play(): void {
    if (this._isPlaying) return;
    this._isPlaying = true;
    this.clock.start((dt) => this.tick(dt));
  }

  pause(): void {
    if (!this._isPlaying) return;
    this._isPlaying = false;
    this.clock.stop();
  }

  /** Seek to a normalized time in [0, 1]. Clamps. Fires onTick subscribers. */
  seek(t: number): void {
    this._t = Math.max(0, Math.min(1, t));
    this._endPauseRemaining = 0;
    this._cachedState = null;
    this.emitTick();
  }

  /** Seek to t=0 and pause. Equivalent to `seek(0); pause()`. */
  reset(): void {
    this.pause();
    this._t = 0;
    this._endPauseRemaining = 0;
    this._cachedState = null;
    this.overlay.clear();
    this.emitTick();
  }

  /**
   * Replace the held Timeline. Preserves `t` (in [0,1], so it survives
   * any duration change directly) and `isPlaying`. Overlay is preserved.
   */
  attach(timeline: Timeline<TState>): void {
    this._timeline = timeline;
    this.overlay._timelineDurationSec = timeline.duration;
    this._cachedState = null;
    this.emitTick();
  }

  // ---- Subscriptions ----

  /**
   * Register a tick callback (for figure to redraw). Receives normalized
   * time and composed state on every frame. Returns unsubscribe.
   */
  onTick(callback: TickCallback<TState>): () => void {
    this.tickCallbacks.add(callback);
    return () => {
      this.tickCallbacks.delete(callback);
    };
  }

  /** Stop the clock and drop all subscribers / overlay clips. */
  dispose(): void {
    this.pause();
    this.tickCallbacks.clear();
    this.overlay.clear();
    this._cachedState = null;
  }

  // ---- Internals ----

  private tick(dt: number): void {
    // If in end-pause hold, count down before considering whether to loop.
    if (this._endPauseRemaining > 0) {
      this._endPauseRemaining -= dt;
      if (this._endPauseRemaining <= 0 && this.looping) {
        this._t = 0;
        this.overlay.clear();
      }
      this._cachedState = null;
      this.emitTick();
      return;
    }

    const durationSec = this._timeline.duration;
    const newT = Math.min(1, this._t + dt / durationSec);
    this._t = newT;
    this._cachedState = null;
    this.overlay._sweep(newT);

    if (this.isAtEnd) {
      if (this.endPause > 0 && this.looping) {
        this._endPauseRemaining = this.endPause;
      } else if (this.looping) {
        this._t = 0;
        this.overlay.clear();
      } else {
        this.pause();
      }
    }

    this.emitTick();
  }

  private emitTick(): void {
    const t = this._t;
    const state = this.state;
    for (const cb of this.tickCallbacks) cb(t, state);
  }

  private resolveComposedState(): TState {
    // Authored state first.
    let result = this._timeline.stateAt(this._t);

    // Overlay clips merged in insertion order, last-wins.
    for (const oc of this.overlay.clips) {
      const duration = oc.end - oc.start;
      const isInstant = duration === 0;

      const hasStarted = isInstant
        ? Math.abs(this._t - oc.start) < 0.0001
        : this._t >= oc.start;
      if (!hasStarted) continue;

      const hasEnded = this._t > oc.end;
      const localT = isInstant
        ? 1
        : hasEnded ? 1 : Math.min(1, Math.max(0, (this._t - oc.start) / duration));

      const update = oc.clip.reduce(localT);
      if (update !== null) {
        result = { ...result, ...update };
      }
    }

    return result;
  }
}

// Re-export ClipKind for convenience; consumers building Players often need
// to discriminate clip kinds via `timeline.clips`.
export type { ClipKind };
