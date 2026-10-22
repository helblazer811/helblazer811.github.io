<script lang="ts">
  import katex from 'katex';
  import { onMount } from 'svelte';
  import 'katex/dist/katex.min.css';
  let useNativeMath = $state(false);
  onMount(() => {
    useNativeMath = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  });
  let { x, y, math, width = 120, size = 16, centered = false }: { x: number; y: number; math: string; width?: number; size?: number; centered?: boolean } = $props();
  const markup = $derived(useNativeMath
    ? katex.renderToString(math, { output: 'mathml', throwOnError: true }).match(/<math[\s\S]*?<\/math>/)?.[0] ?? ''
    : katex.renderToString(math, { output: 'html', throwOnError: true }));
</script>
<g transform={`translate(${x - width / 2}, ${y - size * (centered ? 1.4 : 1.35)})`}>
<foreignObject x="0" y="0" {width} height={size * 2.8} overflow="visible" style="pointer-events: none;">
  <div xmlns="http://www.w3.org/1999/xhtml" style={`font-size:${size}px; text-align:center; white-space:nowrap; color:inherit; line-height:${centered ? 1 : 1.5};${centered ? 'height:100%;display:flex;align-items:center;justify-content:center;' : ''}`}>{@html markup}</div>
</foreignObject>
</g>

<style>
  /* Match the article's KaTeX glyphs while retaining native MathML layout in SVG. */
  div :global(math) {
    font-family: KaTeX_Main, serif;
  }
  div :global(mi) {
    font-family: KaTeX_Math, KaTeX_Main, serif;
    font-style: italic;
  }
  div :global(mn),
  div :global(mo),
  div :global(mtext) {
    font-family: KaTeX_Main, serif;
    font-style: normal;
  }
</style>
