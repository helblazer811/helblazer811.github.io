<script lang="ts">
  import { onMount } from 'svelte';
  import SvgMath from './SvgMath.svelte';
  import { Timeline } from './tempus/timeline';
  import { Player } from './tempus/player';
  let { truncated = false }: { truncated?: boolean } = $props();
  const uid = $props.id();
  const loss = String.fromCharCode(92) + 'mathcal{L}';
  const endpoint = $derived(truncated ? 379 : 65);
  let root: HTMLElement;
  let progress = $state(0);
  const head = $derived(574 - (574 - endpoint) * progress);

  let player: Player<{ progress: number }> | undefined;
  onMount(() => {
    player = new Player(Timeline.from({ duration: 4, initialState: { progress: 0 }, clips: [
      { start: 0, end: 1, clip: { name: 'Backward gradient traversal', reduce: t => ({ progress: t }) } }
    ] }), { looping: true, endPause: 1.5 });
    const off = player.onTick((_, state) => { progress = state.progress; });
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const sync = () => {
      if (motion.matches) { player?.pause(); player?.seek(1); }
      else if (visible && !document.hidden) player?.play();
      else player?.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(root);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => { off(); player?.dispose(); observer.disconnect(); motion.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync); };
  });
</script>

<figure bind:this={root}>
  <svg viewBox={truncated ? '0 -10 615 165' : '0 -10 615 145'} role="img" aria-label={truncated ? 'A loss backpropagates through only the last of three shared-core applications, stopping at a detached boundary.' : 'A loss backpropagates through all three shared-core applications.'}>
    <defs>
      <marker id={`${uid}-forward`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#9296a0" /></marker>
      <marker id={`${uid}-back`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#c87943" /></marker>
    </defs>
    <text class="title" x="300" y="12">{truncated ? 'Truncated Backpropagation Through Time' : 'Backpropagation Through Time'}</text>
    {#each ['M75 54H88', 'M160 54H184', 'M234 54H258', 'M330 54H354', 'M404 54H428', 'M500 54H525'] as segment}
      <path class="forward" d={segment} marker-end={`url(#${uid}-forward)`} />
    {/each}
    {#each Array(3) as _, i}
      <rect class="core" x={90 + i * 170} y="38" width="68" height="68" rx="8" />
      {#each Array(3) as _, j}
        <rect class="layer" class:reached={(!truncated || i === 2) && head <= 106 + i * 170 + j * 18} x={98 + i * 170 + j * 18} y="44" width="16" height="56" rx="3" />
      {/each}
      <text class="core-label" x={124 + i * 170} y="125">Core</text>
    {/each}
    {#each [50,209,379,550] as x, i}
      <SvgMath {x} y={65} width={58} size={16} math={i === 0 ? 'h^{(k)}' : `h^{(k+${i})}`} />
    {/each}
    <path class="forward" d="M570 54H590V74" marker-end={`url(#${uid}-forward)`} />
    <SvgMath x={590} y={101} width={36} size={21} math={loss} />
    <path class="back-track" d={`M574 90H${endpoint}`} />
    {#if progress > .005}
      <path class="back" d={`M574 90H${head}`} marker-end={`url(#${uid}-back)`} />
    {/if}
    {#if truncated}
      <path class="stop" d="M379 72V111" />
      <text class="stop-label" x="379" y="126"><tspan x="379">Stop</tspan><tspan x="379" dy="15">Gradient</tspan></text>
    {/if}
  </svg>
</figure>

<style>
  figure { margin: .5rem clamp(16px,8%,60px) .5rem; }
  svg { display:block; width:100%; height:auto; }
  text { text-anchor:middle; font-family:inherit; }
  .title { font-size:var(--figure-title-size); fill:var(--figure-title-color); font-weight:var(--figure-title-weight); }
  .core { fill:#e9e5fa; stroke:#8d7dbe; stroke-width:1; }
  .layer { fill:#c9bfe5; transition:fill 120ms; }
  .layer.reached { fill:#d79b70; }
  .core-label { font-size:13px; fill:#8d7dbe; }
  .forward { fill:none; stroke:#9296a0; stroke-width:1.3; }
  .back-track { fill:none; stroke:#ecd7c8; stroke-width:1.4; stroke-dasharray:3 4; }
  .back { fill:none; stroke:#c87943; stroke-width:2.2; }
  .stop { fill:none; stroke:#68707c; stroke-width:2; }
  .stop-label { font-size:13px; fill:#68707c; }
</style>
