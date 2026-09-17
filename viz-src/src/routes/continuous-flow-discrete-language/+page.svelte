<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import PageHeader from '$lib/PageHeader.svelte';
	import VideoExplainer from '$lib/VideoExplainer.svelte';
	import DiscreteLanguageFlow from './DiscreteLanguageFlow.svelte';

	let captureMode = false;

	onMount(() => {
		captureMode = new URLSearchParams(window.location.search).get('capture') === '1';
	});
</script>

<svelte:head>
	<title>Continuous Flows for Discrete Language — Alec Helbling</title>
	<meta name="description" content="A visual explanation of continuous flow models generating discrete word embeddings." />
</svelte:head>

{#if captureMode}
	<div class="capture-page">
		<DiscreteLanguageFlow />
	</div>
{:else}
	<div class="wide-viz-page">
		<div class="article-copy">
			<PageHeader title="Continuous Flows for Discrete Language" author="Alec Helbling" authorLink="https://alechelbling.com" date="September 17, 2026" />

			<p>
				A growing body of work uses continuous flow models to solve discrete problems such as
				natural language generation. One simple approach embeds a vocabulary as one-hot vectors,
				then learns a continuous flow from Gaussian noise into that representation space.
			</p>
		</div>

		<div class="video-wrap">
			<VideoExplainer
				src={`${base}/continuous-flow-discrete-language.mp4`}
				poster={`${base}/continuous-flow-discrete-language-poster.jpg`}
				fallback="An animation of Gaussian samples flowing into three discrete word embeddings."
				caption="A continuous flow transports Gaussian noise into modes centered at the one-hot embeddings for dog, cat, and bird."
				aspectRatio="16 / 9"
			/>
		</div>
	</div>
{/if}

<style>
	.article-copy {
		max-width: 720px;
		margin: 0 auto;
	}

	.video-wrap {
		width: min(1500px, calc(100vw - 48px));
		margin: 2rem auto 0;
	}

	.capture-page {
		width: 1920px;
		height: 1080px;
	}

	:global(body:has(.wide-viz-page) .page-container),
	:global(body:has(.capture-page) .page-container) {
		max-width: none;
	}

	:global(body:has(.capture-page)) {
		overflow: hidden;
	}

	:global(body:has(.capture-page) .top-nav) {
		display: none;
	}

	:global(body:has(.capture-page) .page-container) {
		margin: 0;
		padding: 0;
	}
</style>
