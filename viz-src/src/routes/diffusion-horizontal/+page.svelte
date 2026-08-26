<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { writable } from 'svelte/store';
	import PageHeader from '$lib/PageHeader.svelte';
	import DiffusionHorizontal from './DiffusionHorizontal.svelte';

	let sourceDistributionSamples: number[][] = $state([]);
	let targetDistributionSamples: number[][] = $state([]);
	const allTimeSamples = writable<number[][][]>([]);

	let isLoading = $state(true);
	let error: string | null = $state(null);

	onMount(async () => {
		try {
			const targetRes = await fetch(`${base}/diffusion-horizontal/data/smiley_face.json`);
			if (!targetRes.ok) throw new Error('Failed to load target distribution');
			const targetData = await targetRes.json();
			targetDistributionSamples = targetData.points;

			const trajRes = await fetch(`${base}/diffusion-horizontal/cached_samples/ddpm_trajectories.json`);
			if (!trajRes.ok) throw new Error('Failed to load DDPM trajectories');
			const trajectories: number[][][] = await trajRes.json();

			allTimeSamples.set(trajectories);
			sourceDistributionSamples = trajectories[0];

			isLoading = false;
		} catch (e) {
			console.error('Failed to initialize:', e);
			error = e instanceof Error ? e.message : String(e);
			isLoading = false;
		}
	});
</script>

<svelte:head>
	<title>Diffusion Probability Path — Alec Helbling</title>
</svelte:head>

<PageHeader
	title="Diffusion Probability Path"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="August 25, 2026"
/>

{#if isLoading}
	<div class="loading">Loading...</div>
{:else if error}
	<div class="error">
		<p>Error: {error}</p>
	</div>
{:else}
	<DiffusionHorizontal {sourceDistributionSamples} {targetDistributionSamples} {allTimeSamples}>
		{#snippet children()}
			<p class="caption">
				<strong>Figure:</strong> Diffusion model probability path from noise (x_T) to data (x_0).
				The animation shows how samples evolve through the reverse diffusion process using DDPM
				sampling.
			</p>
		{/snippet}
	</DiffusionHorizontal>
{/if}

<style>
	.loading {
		text-align: center;
		padding: 48px;
		color: #666;
	}

	.error {
		background-color: #fee;
		border: 1px solid #fcc;
		border-radius: 8px;
		padding: 24px;
		text-align: center;
		color: #c00;
	}

	.caption {
		text-align: center;
		color: #666;
		font-size: 0.95rem;
		margin-top: 16px;
		line-height: 1.5;
	}
</style>
