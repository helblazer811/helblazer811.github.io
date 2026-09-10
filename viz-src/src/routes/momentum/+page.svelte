<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/PageHeader.svelte';
	import VideoExplainer from '$lib/VideoExplainer.svelte';
</script>

<svelte:head>
	<title>Momentum in Gradient Descent — Alec Helbling</title>
	<meta name="description" content="A visual comparison of gradient descent with and without momentum." />
</svelte:head>

<PageHeader title="Momentum in Gradient Descent" author="Alec Helbling" authorLink="https://alechelbling.com" date="February 24, 2025" />

<p>
	Momentum accumulates a moving direction from earlier updates, helping gradient descent move
	through shallow local minima and continue toward a better basin.
</p>

<VideoExplainer
	src={`${base}/momentum.mp4`}
	poster={`${base}/momentum-poster.jpg`}
	fallback="An animation comparing gradient descent with and without momentum."
	caption="Plain gradient descent settles into a nearby local minimum, while momentum carries the trajectory into the deeper basin."
	aspectRatio="16 / 9"
/>
