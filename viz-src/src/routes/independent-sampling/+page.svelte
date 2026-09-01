<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/PageHeader.svelte';
	import FigureBlock from '$lib/FigureBlock.svelte';
</script>

<svelte:head>
	<title>Independent Sampling in Masked Diffusion — Alec Helbling</title>
	<meta
		name="description"
		content="A visual explanation of how conditionally independent token sampling can turn sensible marginals into an incoherent generated sequence."
	/>
</svelte:head>

<PageHeader
	title="Independent Sampling in Masked Diffusion"
	subtitle="When sensible token marginals produce an incoherent joint sample"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="September 1, 2026"
/>

<p>
	Masked diffusion models predict multiple masked tokens in parallel. Each
	position can have a sensible marginal distribution while the combined sample
	breaks a dependency between positions. Here both distributions independently
	select <em>Alice</em>, producing a sequence that makes no sense.
</p>

<FigureBlock backgroundVisible={false}>
	{#snippet children()}
		<video class="animation" autoplay muted loop playsinline preload="auto">
			<source src={`${base}/independent-sampling.mp4`} type="video/mp4" />
			A diagram showing conditionally independent sampling in masked diffusion.
		</video>
	{/snippet}
	{#snippet caption()}
		Individually plausible token marginals do not guarantee a coherent joint
		sample when masked positions are decoded conditionally independently.
	{/snippet}
</FigureBlock>

<style>
	.animation {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 10;
		background: #ffffff;
	}
</style>
