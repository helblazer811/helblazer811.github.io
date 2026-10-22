// ===== Clip =====
// A clip is a PURE function of local time. Given a local `t ∈ [0, 1]`
// (0 at clip start, 1 at clip end), it returns a partial state update.
// Clips do not see prior accumulated state — same `t` always produces the
// same output. State at any timeline point is therefore a pure function of
// the clip list and the playhead, not of playback history. This makes
// seek / scrub / hover / inspector queries deterministic and O(clips).
//
// Clips are timing-agnostic — they describe behavior. Scheduling
// (`start`, `end`) is provided when adding them to a timeline.
export type Clip<TState> = {
  name: string;
  reduce(t: number): Partial<TState> | null;
  /** Optional one-line statement of what this clip is supposed to do
   *  visually. Read by `tempus verify` to assemble before/after probes
   *  for a vision-capable agent to judge. Plain English. Examples:
   *    "opacity goes from 0 to 1"
   *    "the title slides in from the left edge"
   *    "the red dot disappears" */
  intent?: string;
};

/** Kind of clip. `pause` clips reduce to `null` and exist to freeze the
 *  previously-rendered state for a span. Detected automatically when the
 *  clip was made via `createPauseClip()`; consumers don't normally set this. */
export type ClipKind = 'animated' | 'pause';

// ===== Frozen ClipInfo =====
// The structural record stored on a built Timeline. Frozen at build time.
// `start`, `end`, `track` are all resolved at build; nothing changes after.
export type ClipInfo<TState> = Readonly<{
  id: string;
  name: string;
  start: number;   // normalized [0,1]
  end: number;     // normalized [0,1]
  track: number;   // resolved track (auto-promotion already applied)
  kind: ClipKind;
  clip: Clip<TState>;
}>;

// ===== Internal: Timeline.from spec =====
export type TimelineSpec<TState> = {
  duration: number;                 // seconds
  initialState: TState;
  clips: ReadonlyArray<{
    clip: Clip<TState>;
    start: number;                  // normalized [0,1]
    end: number;                    // normalized [0,1]
    track?: number;
    kind?: ClipKind;
    id?: string;
  }>;
};

/**
 * Replay auto-promotion over a list of (start, end, requestedTrack) entries
 * and return the resolved track for each. Promotion is "find the first
 * track ≥ the clip's requested track where its timing doesn't overlap any
 * already-placed clip." Probed in insertion order. Half-open intervals
 * (`start < other.end && other.start < end`) — clips sharing only a
 * boundary do not overlap.
 *
 * Exported so the Builder can use the same algorithm.
 */
export function resolveTrackAssignments(
  clips: ReadonlyArray<{ start: number; end: number; track: number }>,
): number[] {
  const resolved: number[] = [];
  const placed: Array<{ start: number; end: number; track: number }> = [];
  for (const s of clips) {
    let t = s.track;
    while (placed.some(p => p.track === t && p.start < s.end && s.start < p.end)) {
      t++;
    }
    resolved.push(t);
    placed.push({ start: s.start, end: s.end, track: t });
  }
  return resolved;
}

// ===== Timeline (frozen) =====
/**
 * Immutable, framework-agnostic description of an animation: a duration, an
 * initial state, and a frozen list of clips. The only thing the Player
 * accepts.
 *
 * State at any normalized time `t ∈ [0, 1]` is a pure function of these
 * fields — `timeline.stateAt(t)`. No playback state lives here. Looping,
 * end-pause, the clock, transport, the overlay — all on the Player.
 *
 * Construction goes through `TimelineBuilder.build()` or `Timeline.from()`.
 * Direct `new Timeline(...)` is not exposed.
 */
export class Timeline<TState> {
  readonly duration: number;                       // seconds
  readonly initialState: TState;
  readonly clips: ReadonlyArray<ClipInfo<TState>>;

  /** @internal — use TimelineBuilder.build() or Timeline.from() */
  constructor(spec: {
    duration: number;
    initialState: TState;
    clips: ReadonlyArray<ClipInfo<TState>>;
  }) {
    if (spec.duration <= 0 || !Number.isFinite(spec.duration)) {
      throw new Error(`Timeline: duration must be a positive finite number (got ${spec.duration})`);
    }
    this.duration = spec.duration;
    this.initialState = spec.initialState;
    // Freeze each clip record and the array, then the Timeline itself.
    const frozenClips = spec.clips.map(c => Object.freeze({ ...c })) as ReadonlyArray<ClipInfo<TState>>;
    this.clips = Object.freeze(frozenClips);
    Object.freeze(this);
  }

  /**
   * Resolve the host state at normalized time `t ∈ [0, 1]` by walking every
   * clip in insertion order and merging partial updates last-wins. Tracks
   * are purely visual organization; they do NOT affect state resolution.
   *
   * Pure. Cheap (O(clips)). Identical to playing-through-to-`t` would have
   * produced, by construction.
   */
  stateAt(t: number): TState {
    const clamped = Math.max(0, Math.min(1, t));
    // Start from a fresh copy of the initial state so callers can't mutate
    // the canonical reference.
    let result: TState = { ...(this.initialState as object) } as TState;

    for (const c of this.clips) {
      const duration = c.end - c.start;
      const isInstant = duration === 0;

      const hasStarted = isInstant
        ? Math.abs(clamped - c.start) < 0.0001
        : clamped >= c.start;
      if (!hasStarted) continue;

      const hasEnded = clamped > c.end;
      const localT = isInstant
        ? 1
        : hasEnded ? 1 : Math.min(1, Math.max(0, (clamped - c.start) / duration));

      const update = c.clip.reduce(localT);
      if (update !== null) {
        result = { ...result, ...update };
      }
    }

    return result;
  }

  /**
   * Direct data-driven construction. Accepts pre-resolved absolute timing
   * (already in normalized [0, 1]) and a requested track per clip; runs
   * the same validation as the Builder and freezes.
   */
  static from<TState>(spec: TimelineSpec<TState>): Timeline<TState> {
    validateSpec(spec);

    // Resolve tracks via auto-promotion.
    const requested = spec.clips.map(c => ({
      start: c.start,
      end: c.end,
      track: c.track ?? 0,
    }));
    const resolved = resolveTrackAssignments(requested);

    const seenIds = new Set<string>();
    let autoId = 0;
    const clips: ClipInfo<TState>[] = spec.clips.map((c, i) => {
      const id = c.id ?? `clip-${autoId++}`;
      if (seenIds.has(id)) throw new Error(`Timeline.from: duplicate clip id "${id}"`);
      seenIds.add(id);
      return {
        id,
        name: c.clip.name,
        start: c.start,
        end: c.end,
        track: resolved[i],
        kind: c.kind ?? (isPauseClip(c.clip) ? 'pause' : 'animated'),
        clip: c.clip,
      };
    });

    return new Timeline({
      duration: spec.duration,
      initialState: spec.initialState,
      clips,
    });
  }
}

function validateSpec<TState>(spec: TimelineSpec<TState>): void {
  if (spec.duration <= 0 || !Number.isFinite(spec.duration)) {
    throw new Error(`Timeline.from: duration must be positive (got ${spec.duration})`);
  }
  for (const c of spec.clips) {
    if (c.start < 0 || c.start > 1) {
      throw new Error(`Timeline.from: clip "${c.clip.name}" has start out of [0,1] (got ${c.start})`);
    }
    if (c.end < 0 || c.end > 1) {
      throw new Error(`Timeline.from: clip "${c.clip.name}" has end out of [0,1] (got ${c.end})`);
    }
    if (c.start > c.end) {
      throw new Error(`Timeline.from: clip "${c.clip.name}" has start > end (${c.start} > ${c.end})`);
    }
    const trk = c.track ?? 0;
    if (!Number.isInteger(trk) || trk < 0) {
      throw new Error(`Timeline.from: clip "${c.clip.name}" has invalid track ${trk} (must be a non-negative integer)`);
    }
  }
}

// ===== Pause Clip =====
/**
 * Creates a pause clip whose reducer returns `null` for any local `t`.
 *
 * In a Timeline, returning `null` from `reduce` means "write no keys" — the
 * prior contributions to host state keys are preserved by the insertion-
 * order merge. A pause clip therefore freezes the previously-rendered state
 * for the duration of its window.
 *
 * The returned clip carries a non-enumerable `__isPause` sentinel so the
 * Builder (and the inspector) can recognize pause clips for specialized
 * rendering and the multi-track sugar (`builder.addPause`).
 */
export function createPauseClip<TState>(): Clip<TState> {
  const clip: Clip<TState> = {
    name: 'Pause',
    reduce: () => null,
  };
  Object.defineProperty(clip, '__isPause', { value: true, enumerable: false });
  return clip;
}

/** True if the given clip was created by `createPauseClip()`. */
export function isPauseClip(clip: Clip<any>): boolean {
  return (clip as { __isPause?: boolean }).__isPause === true;
}
