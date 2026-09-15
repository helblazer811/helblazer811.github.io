<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/PageHeader.svelte';
	import VideoExplainer from '$lib/VideoExplainer.svelte';
</script>

<svelte:head>
	<title>Flow Reasoning Models Are Looped Models — Alec Helbling</title>
	<meta
		name="description"
		content="An animated explanation of recurrent flow reasoning, unrolling, and independent losses without backpropagation through time."
	/>
</svelte:head>

<PageHeader
	title="Flow Reasoning Models Are Looped Models"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="September 15, 2026"
/>

<p>
	A looped flow reasoning model can be unrolled into repeated refinement steps. Each prediction has
	its own loss, so training does not require expensive backpropagation through time.
</p>

<VideoExplainer
	src={`${base}/flow-reasoning-models-looped.mp4`}
	poster={`${base}/flow-reasoning-models-looped-poster.jpg`}
	fallback="An animation unrolling a looped flow reasoning model and showing independent losses."
	caption="A recurrent flow reasoning model unrolled into refinement steps with independent training losses."
	aspectRatio="8 / 5"
/>
