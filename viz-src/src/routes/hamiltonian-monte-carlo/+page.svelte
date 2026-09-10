<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/PageHeader.svelte';
	import VideoExplainer from '$lib/VideoExplainer.svelte';
</script>

<svelte:head>
	<title>Hamiltonian Monte Carlo — Alec Helbling</title>
	<meta name="description" content="A visual introduction to Hamiltonian Monte Carlo and its movement through a target density." />
</svelte:head>

<PageHeader title="Hamiltonian Monte Carlo" author="Alec Helbling" authorLink="https://alechelbling.com" date="September 7, 2026" />

<p>
	Hamiltonian Monte Carlo augments a sample with momentum and follows the resulting Hamiltonian
	dynamics. These structured trajectories can travel much farther through a distribution than a
	random-walk proposal.
</p>

<VideoExplainer
	src={`${base}/hamiltonian-monte-carlo.mp4`}
	poster={`${base}/hamiltonian-monte-carlo-poster.jpg`}
	fallback="An animation of Hamiltonian Monte Carlo moving through a target density."
	caption="Position and momentum evolve together along an approximately constant-energy trajectory."
	aspectRatio="19 / 12"
/>
