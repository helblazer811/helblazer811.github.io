<script lang="ts">
	import NeonDiffusion from './NeonDiffusion.svelte';
</script>

<svelte:head>
	<title>Neon Diffusion — Alec Helbling</title>
	<meta
		name="description"
		content="A pixel-art visualization of forward and reverse diffusion between a smiley data manifold and Gaussian noise."
	/>
</svelte:head>

<main class="neon-page">
	<NeonDiffusion />
</main>

<style>
	:global(body) {
		margin: 0;
		background: #010405;
		color: #d4ffe3;
		overflow: hidden;
	}

	:global(.top-nav) {
		display: none;
	}

	:global(.page-container) {
		padding: 0;
	}

	.neon-page {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		background: #010405;
	}
</style>
