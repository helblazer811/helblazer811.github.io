/**
 * Overlay — a tiny mutable clip list owned by the Player for ephemeral
 * interaction effects (hover overlays, click flashes, scrub injections).
 *
 * Composed AFTER the authored Timeline at sample time, so overlay clips
 * always win on conflicting state keys. The overlay's clips are merged in
 * insertion order, the same last-wins semantic as the authored Timeline.
 *
 * Overlay clips auto-remove after one complete play (i.e. once the
 * playhead has been past their `end` at least once). The Player drives
 * this housekeeping on each tick.
 *
 * Intentionally minimal: no kinds, no tracks, no pauses, no gates. Use the
 * Builder for anything you want visible in the inspector or part of the
 * authored animation.
 */
import type { Clip } from './timeline';

export type OverlayClip<TState> = {
  id: string;
  clip: Clip<TState>;
  start: number;          // normalized [0, 1]
  end: number;            // normalized [0, 1]
  /** Goes true once `playhead >= end` on a tick; the Player removes it. */
  consumed: boolean;
};

export type OverlayAddOptions = {
  /** Normalized start time in [0, 1]. Default: 0. */
  start?: number;
  /** Duration in seconds. Converted to a normalized [start, end] using the
   *  Timeline duration the overlay is attached to. */
  durationMs?: number;
  /** Duration as a fraction of the Timeline (normalized 0..1 width). */
  durationFraction?: number;
};

export class Overlay<TState> {
  private _clips: OverlayClip<TState>[] = [];
  private _nextId = 0;
  /** Set by the Player when the overlay attaches; used to convert ms→frac. */
  _timelineDurationSec: number = 1;

  /**
   * Add an ephemeral clip. `start` is normalized [0,1] (default 0).
   * Provide either `durationMs` or `durationFraction`; if neither, the clip
   * is instant (start === end).
   *
   * Returns the new clip's id (stable until removal or auto-cleanup).
   */
  add(clip: Clip<TState>, opts: OverlayAddOptions = {}): string {
    const id = `overlay-${this._nextId++}`;
    const start = opts.start ?? 0;
    let end = start;
    if (opts.durationFraction !== undefined) {
      end = start + opts.durationFraction;
    } else if (opts.durationMs !== undefined && this._timelineDurationSec > 0) {
      end = start + opts.durationMs / 1000 / this._timelineDurationSec;
    }
    this._clips.push({
      id,
      clip,
      start: Math.max(0, Math.min(1, start)),
      end: Math.max(0, Math.min(1, end)),
      consumed: false,
    });
    return id;
  }

  /** Remove a clip by id. Returns true if removed. */
  remove(id: string): boolean {
    const i = this._clips.findIndex(c => c.id === id);
    if (i === -1) return false;
    this._clips.splice(i, 1);
    return true;
  }

  /** Drop every overlay clip. */
  clear(): void {
    this._clips.length = 0;
  }

  /** Internal: iterated by the Player during state composition. */
  get clips(): ReadonlyArray<OverlayClip<TState>> {
    return this._clips;
  }

  /**
   * Internal: called by the Player on each tick. Marks any clip whose
   * window has been fully passed (playhead beyond `end`) as consumed and
   * removes consumed clips.
   *
   * Half-open semantics: a clip with `start === end` is consumed as soon as
   * `t > start`.
   */
  _sweep(t: number): void {
    let i = 0;
    while (i < this._clips.length) {
      const c = this._clips[i];
      if (t > c.end || (c.start === c.end && t > c.start)) {
        this._clips.splice(i, 1);
      } else {
        i++;
      }
    }
  }
}
