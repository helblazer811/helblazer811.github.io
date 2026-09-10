<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/PageHeader.svelte';
	import VideoExplainer from '$lib/VideoExplainer.svelte';
</script>

<svelte:head>
	<title>Class-Conditioned Flow Matching — Alec Helbling</title>
	<meta name="description" content="A visual explanation of how class conditioning resolves ambiguous flow-matching regression targets." />
</svelte:head>

<PageHeader title="Class-Conditioned Flow Matching" author="Alec Helbling" authorLink="https://alechelbling.com" date="May 19, 2026" />

<p>
	When several classes share the same source distribution, an unconditional flow model can face
	ambiguous regression targets. Supplying the class label separates those targets and gives the
	model a clearer velocity field to learn.
</p>

<VideoExplainer
	src={`${base}/class-conditioned-flow-matching.mp4`}
	poster={`${base}/class-conditioned-flow-matching-poster.jpg`}
	fallback="An animation showing unconditional and class-conditioned flow matching."
	caption="Class conditioning tells the flow which target mode to follow instead of averaging incompatible directions."
	aspectRatio="16 / 9"
/>
