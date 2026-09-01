<script lang="ts">
	import { writable } from 'svelte/store';
	import PageHeader from '$lib/PageHeader.svelte';
	import FigureBlock from '$lib/FigureBlock.svelte';
	import GenerationComparisonFigure from './GenerationComparisonFigure.svelte';
	import MaskToken from './MaskToken.svelte';

	const genCompareActive = writable(false);
</script>

<svelte:head>
	<title>Block Diffusion — Alec Helbling</title>
</svelte:head>

<PageHeader
	title="Block Diffusion"
	subtitle="Two ways to generate text, on one shared clock"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="July 13, 2026"
/>

<p>
	Autoregressive language models generate one token at a time, strictly
	left to right. <a href="https://arxiv.org/abs/2503.09573">Block diffusion</a>
	models trade that for parallelism: tokens are grouped into fixed-size
	blocks, every token in a block un-masks simultaneously in one decoding
	step, and blocks themselves still complete left-to-right. The animation
	below runs both processes on the same shared clock so the speedup is
	visible directly.
</p>

<FigureBlock backgroundVisible={false} isActive={genCompareActive}>
	{#snippet children()}
		<GenerationComparisonFigure
			isActive={genCompareActive}
			maskColor="#cfe0f2"
			fontSize="1.15rem"
			crossFade={false}
			scalePulse={true}
		/>
	{/snippet}
	{#snippet caption()}
		Autoregressive vs. block diffusion, driven by one shared reveal clock.
		Top: tokens generated strictly left-to-right (AR); pending slots are a
		subtle dashed underline since AR has no <MaskToken /> sentinel. Bottom:
		tokens grouped into fixed-size blocks; every token in a block un-masks
		simultaneously in one decoding step, and blocks complete strictly
		left-to-right (block diffusion). Pending slots show <MaskToken />. The
		bottom row finishes about 4&times; sooner than the top row on the same
		shared clock, and both then rest before the animation auto-cycles.
	{/snippet}
</FigureBlock>
