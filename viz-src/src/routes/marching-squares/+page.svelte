<script lang="ts">
	import PageHeader from '$lib/PageHeader.svelte';
	import MarchingSquares from './MarchingSquares.svelte';
	import TopographicMap from './TopographicMap.svelte';
</script>

<svelte:head>
	<title>Marching Squares — Alec Helbling</title>
</svelte:head>

<PageHeader
	title="Marching Squares"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="August 25, 2026"
/>

<!-- MarchingSquares/TopographicMap draw their canvases and title text in
     light colors on a #1a1a1a backdrop (baked into the canvas fillStyle
     calls, not just page CSS) — scoped dark wrapper here rather than
     overriding the whole page, so the site's light nav/header stay as-is. -->
<div class="dark-figure-area">
	<MarchingSquares />
	<TopographicMap />
</div>

<style>
	.dark-figure-area {
		background-color: #1a1a1a;
		margin: 0 -1.5rem;
		padding: 40px 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
	}
</style>
