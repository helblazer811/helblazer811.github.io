<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/PageHeader.svelte';
	import VideoExplainer from '$lib/VideoExplainer.svelte';
</script>

<svelte:head>
	<title>Flow Reasoning Model Attractor Landscape — Alec Helbling</title>
	<meta
		name="description"
		content="A three-dimensional attractor-landscape visualization of iterative reasoning in a flow reasoning model."
	/>
</svelte:head>

<PageHeader
	title="Flow Reasoning Model Attractor Landscape"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="September 15, 2026"
/>

<p>
	The model repeatedly refines a noisy state, following a learned flow toward a solution attractor.
	This animation connects the recurrent computation to its three-dimensional loss landscape.
</p>

<VideoExplainer
	src={`${base}/flow-reasoning-models-attractor-landscape.mp4`}
	poster={`${base}/flow-reasoning-models-attractor-landscape-poster.jpg`}
	fallback="An animation of a flow reasoning model moving through a three-dimensional attractor landscape."
	caption="Iterative reasoning as movement through a learned attractor landscape."
	aspectRatio="8 / 5"
/>
