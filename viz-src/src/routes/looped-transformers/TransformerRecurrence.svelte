<script lang="ts">
  import { onMount } from 'svelte';
  import { observeRecurrence } from './recurrence-clock';
  import SvgMath from './SvgMath.svelte';
  const uid = $props.id();
  const tokens = ['The', 'cat', 'sat', 'down'];
  const positions = [91, 120, 149, 178];
  let root: HTMLElement;
  let elapsed = $state(0);
  const current = $derived(Math.min(3, Math.floor(elapsed / 2.1)));
  const local = $derived(elapsed - current * 2.1);
  const copying = $derived(Math.max(0, Math.min(1, (local - .65) / .6)));
  const copyEase = $derived(copying * copying * (3 - 2 * copying));
  const leftPulse = $derived(local / .65);
  const inputPulse = $derived((local - 1.25) / .22);
  const rightPulse = $derived((local - 1.47) / .43);
  onMount(() => observeRecurrence(root, time => { elapsed = time; }));
</script>

{#snippet wirePulse(d: string, progress: number)}
  {#if progress >= 0 && progress <= 1}
    <path class="pulse" {d} pathLength="1" stroke-dasharray="0.28 1" stroke-dashoffset={.28 - 1.28 * progress} />
  {/if}
{/snippet}

{#snippet attention(x: number, pulse = -1)}
  <text class="block-title" x={x + 38} y="49">Attention</text>
  <rect class="layer" {x} y="70" width="76" height="130" rx="8" />
  {#each positions as y, i}
    {#each positions as target, j}
      {@const edge = `${uid}-edge-${x}-${i}-${j}`}
      <path id={edge} class="attention" style:opacity={i === j ? .48 : .12 + ((i * 3 + j * 5) % 4) * .055} d={`M${x + 25} ${y}L${x + 55} ${target}`} />
      {#if pulse >= 0 && pulse <= 1}
        <path class="pulse" d={`M${x + 25} ${y}L${x + 55} ${target}`} pathLength="1" stroke-dasharray="0.22 1" stroke-dashoffset={.22 - 1.22 * pulse} />
      {/if}
    {/each}
  {/each}
  {#each positions as y}
    <rect class="state" x={x + 11} y={y - 7} width="14" height="14" rx="2" />
    <rect class="state" x={x + 55} y={y - 7} width="14" height="14" rx="2" />
  {/each}
{/snippet}

<figure bind:this={root}>
  <svg viewBox="0 0 900 290" role="img" aria-label="A looped transformer updates four token representations in parallel through self-attention. A shared layer on the left is unrolled into repeated depth-wise applications on the right.">
    <defs><marker id={`${uid}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#9296a0" /></marker><path id={`${uid}-loop`} d="M169 70 A14 14 0 1 1 183 84H180" /></defs>
    <text class="title" x="450" y="16">Looped Transformer</text>
    {#each tokens as token, i}
      <text class="token" x="22" y={positions[i] + 5}>{token}</text>
      <path class="wire" d={`M46 ${positions[i]}H94`} marker-end={`url(#${uid}-arrow)`} />
      {@render wirePulse(`M46 ${positions[i]}H94`, current === 0 ? inputPulse : -1)}
    {/each}
    {@render attention(98, rightPulse)}
    <use href={`#${uid}-loop`} class="wire" marker-end={`url(#${uid}-arrow)`} />
    {#if leftPulse >= 0 && leftPulse <= 1}
      <use href={`#${uid}-loop`} class="pulse" pathLength="1" stroke-dasharray="0.22 1" stroke-dashoffset={.22 - 1.22 * leftPulse} />
    {/if}
    <text class="equals" x="210" y="146">=</text>
    {#each tokens as token, i}
      <text class="token" x="254" y={positions[i] + 5}>{token}</text>
      <path class="wire" d={`M272 ${positions[i]}H301`} marker-end={`url(#${uid}-arrow)`} />
      {@render wirePulse(`M272 ${positions[i]}H301`, current === 0 ? inputPulse : -1)}
    {/each}
    {#each [306, 446, 586, 726] as x, i}
      {#if i < current || (i === current && copying > 0)}
        {#each positions as y}
          {#if i > 0}
            <path class="wire" opacity={i < current ? 1 : copyEase} d={`M${x - 60} ${y}H${x - 5}`} marker-end={`url(#${uid}-arrow)`} />
            {@render wirePulse(`M${x - 60} ${y}H${x - 5}`, i === current ? inputPulse : -1)}
          {/if}
        {/each}
        <g opacity={i < current ? 1 : copyEase} transform={`translate(${i < current ? 0 : ((i === 0 ? 98 : x - 140) - x) * (1 - copyEase)} 0)`}>
          {@render attention(x, i === current ? rightPulse : -1)}
        </g>
        {#if i < current || local >= 1.9}
          {#if i === 3}
            {#each positions as y}
              <path class="wire" d={`M${x + 80} ${y}H${x + 109}`} marker-end={`url(#${uid}-arrow)`} />
              {@render wirePulse(`M${x + 80} ${y}H${x + 109}`, i === current ? rightPulse : -1)}
              <rect class="state" x={x + 114} y={y - 7} width="14" height="14" rx="2" />
            {/each}
          {/if}
          <SvgMath x={x + (i === 3 ? 121 : 108)} y={225} width={60} size={16} math={`h_${i + 1}`} />
        {/if}
      {/if}
    {/each}
    <path class="wire" d="M306 236H802" marker-end={`url(#${uid}-arrow)`} />
    <text class="recurrence-label" x="554" y="264">Recurrence over computational depth</text>
  </svg>
</figure>

<style>
  figure { margin: .5rem 0 .6rem; }
  svg { display: block; width: 100%; height: auto; }
  text { text-anchor: middle; font-family: inherit; fill: var(--figure-title-color, #333); }
  .title { font-size: 22px; font-weight: 600; }
  .block-title { font-size: 16px; fill: var(--figure-title-color, #333); }
  .recurrence-label { font-size: 16px; fill: #68707c; }
  .token { font-size: 16px; }
  .equals { font-size: 26px; fill: #68707c; }
  .layer { fill: #f5f3fb; stroke: #8d7dbe; stroke-width: 1; }
  .state { fill: #c9bfe5; stroke: #8d7dbe; stroke-width: .7; }
  .attention { fill: none; stroke: #8d7dbe; stroke-width: 1; }
  .pulse { fill: none; stroke: #7961b2; stroke-width: 2.4; stroke-linecap: round; }
  .wire { fill: none; stroke: #9296a0; stroke-width: 1.3; }
  @media (prefers-reduced-motion: reduce) { .pulse { display: none; } }
</style>
