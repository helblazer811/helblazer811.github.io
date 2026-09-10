<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/PageHeader.svelte';
	import VideoExplainer from '$lib/VideoExplainer.svelte';
</script>

<svelte:head>
	<title>Optimal Transport Coupling — Alec Helbling</title>
	<meta name="description" content="A visual comparison of independent and optimal-transport couplings for flow matching." />
</svelte:head>

<PageHeader title="Optimal Transport Coupling" author="Alec Helbling" authorLink="https://alechelbling.com" date="May 12, 2026" />

<p>
	A coupling determines how samples from a source distribution are paired with samples from a
	target distribution. Independent pairing creates many crossing paths, while minibatch optimal
	transport minimizes the total squared distance between paired samples.
</p>

<VideoExplainer
	src={`${base}/optimal-transport-coupling.mp4`}
	poster={`${base}/optimal-transport-coupling-poster.jpg`}
	fallback="An animation comparing independent and optimal-transport couplings."
	caption="Optimal-transport pairings produce shorter, straighter trajectories that are easier for a flow model to learn and simulate."
	aspectRatio="16 / 9"
/>
