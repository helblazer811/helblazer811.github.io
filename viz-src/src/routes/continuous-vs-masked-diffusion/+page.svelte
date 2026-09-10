<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/PageHeader.svelte';
	import VideoExplainer from '$lib/VideoExplainer.svelte';
</script>

<svelte:head>
	<title>Continuous vs. Masked Diffusion — Alec Helbling</title>
	<meta name="description" content="A side-by-side visual comparison of continuous and masked diffusion." />
</svelte:head>

<PageHeader title="Continuous vs. Masked Diffusion" subtitle="Two information-destroying forward processes, reversed for generation" author="Alec Helbling" authorLink="https://alechelbling.com" date="August 29, 2026" />

<VideoExplainer
	src={`${base}/continuous-vs-masked-diffusion.mp4`}
	poster={`${base}/continuous-vs-masked-diffusion-poster.jpg`}
	fallback="An animation comparing continuous diffusion and masked diffusion."
	caption="Continuous diffusion replaces structure with Gaussian noise; masked diffusion replaces tokens with an absorbing mask state. Their reverse processes generate data by undoing those transformations."
	aspectRatio="16 / 9"
/>
