<script lang="ts">
  import { onMount } from 'svelte';
  import { observeRecurrence } from './recurrence-clock';
  import SvgMath from './SvgMath.svelte';
  const uid = $props.id();
  const tokens = ['The', 'cat', 'sat', 'down'];
  let root: HTMLElement;
  let elapsed = $state(0);
  let loopPath = $state<SVGPathElement>();
  let dot = $state({ x: 157, y: 78 });
  function reveal(i: number) {
    const u = Math.max(0, Math.min(1, (elapsed - i * 2.1 - 0.65) / 0.6));
    return u * u * (3 - 2 * u);
  }
  onMount(() => observeRecurrence(root, time => {
    elapsed = time;
    if (loopPath) {
      const point = loopPath.getPointAtLength(loopPath.getTotalLength() * Math.min(1, (elapsed % 2.1) / .65));
      dot = { x: point.x, y: point.y };
    }
  }));
</script>

<figure bind:this={root}>
  <svg viewBox="0 0 900 290" role="img" aria-label="A sequence RNN, shown as a recurrent cell on the left and unrolled over the tokens The cat sat down on the right. The same cell passes its hidden state between consecutive positions.">
    <defs><marker id={`${uid}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#9296a0" /></marker></defs>
    <text class="title" x="450" y="25">Sequence RNN</text>
    <g transform="translate(0 28)">
    <path bind:this={loopPath} class="wire" d="M154 78 A14 14 0 1 1 168 92H165" marker-end={`url(#${uid}-arrow)`} />
    <circle class="loop-dot" cx={dot.x} cy={dot.y} r="3.5" fill="#7163b0" opacity={elapsed < 8.4 && elapsed % 2.1 < .65 ? 1 : 0} />
    <rect class="cell" x="107" y="78" width="58" height="48" rx="7" />
    <text class="cell-label" x="136" y="108">RNN</text>
    <path class="wire" d="M136 158V130M136 76V48" marker-end={`url(#${uid}-arrow)`} />
    <SvgMath x={136} y={185} width={65} size={18} math={'x_t'} />
    <SvgMath x={136} y={42} width={65} size={18} math={'h_t'} />
    <text class="equals" x="210" y="110">=</text>
    {#each tokens as token, i}
      {@const x = 344 + i * 140}
      {@const t = reveal(i)}
      {#if i > 0 && t > 0}<path class="wire" d={`M${x - 111} 102H${x - 111 + 77 * t}`} marker-end={`url(#${uid}-arrow)`} />{/if}
      <g opacity={t} transform={`translate(${((i === 0 ? 136 : x - 140) - x) * (1 - t)} 0)`}>
      <rect class="cell" x={x - 29} y="78" width="58" height="48" rx="7" />
      <text class="cell-label" {x} y="108">RNN</text>
      <path class="wire" d={`M${x} 158V130M${x} 76V48`} marker-end={`url(#${uid}-arrow)`} />
      <SvgMath {x} y={42} width={70} size={18} math={`h_${i + 1}`} />
      <text class="token" {x} y="183">{token}</text>
      </g>
    {/each}
    </g>
    <path class="wire" d="M315 236H793" marker-end={`url(#${uid}-arrow)`} />
    <text class="recurrence-label" x="554" y="264">Recurrence over token positions</text>
  </svg>
</figure>

<style>
  figure { margin: .5rem 0 .6rem; }
  svg { display: block; width: 100%; height: auto; }
  text { font-family: inherit; text-anchor: middle; fill: var(--figure-title-color, #333); }
  .title { font-size: 22px; font-weight: 600; }
  .cell { fill: #e9e5fa; stroke: #8d7dbe; stroke-width: 1; }
  .cell-label { font-size: 17px; }
  .recurrence-label { font-size: 16px; fill: #68707c; }
  .token { font-size: 18px; }
  .equals { font-size: 26px; fill: #68707c; }
  @media (prefers-reduced-motion: reduce) { .loop-dot { display: none; } }
  .wire { fill: none; stroke: #9296a0; stroke-width: 1.4; }
</style>
