<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/PageHeader.svelte';
	import VideoExplainer from '$lib/VideoExplainer.svelte';
</script>

<svelte:head>
	<title>Seam Carving — Alec Helbling</title>
	<meta name="description" content="A visual explanation of content-aware image resizing with seam carving." />
</svelte:head>

<PageHeader title="Seam Carving" author="Alec Helbling" authorLink="https://alechelbling.com" date="October 11, 2025" />

<p>
	Seam carving resizes an image by finding connected paths of low visual importance and removing
	them one at a time, preserving the image's most important regions.
</p>

<VideoExplainer
	src={`${base}/seam-carving.mp4`}
	poster={`${base}/seam-carving-poster.jpg`}
	fallback="An animation showing content-aware image resizing with seam carving."
	caption="Low-energy seams are removed progressively to change the image width while preserving its main subject."
	aspectRatio="16 / 9"
/>
