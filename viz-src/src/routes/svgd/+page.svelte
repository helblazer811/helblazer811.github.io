<script lang="ts">
	import PageHeader from '$lib/PageHeader.svelte';
	import SVGD from './SVGD.svelte';
</script>

<svelte:head>
	<title>Stein Variational Gradient Descent — Alec Helbling</title>
</svelte:head>

<PageHeader
	title="Stein Variational Gradient Descent"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="August 25, 2026"
/>

<SVGD />

<style>
	/* SVGD's internal title duplicates this page's own PageHeader title, and
	   is styled white-on-transparent (meant for a dark backdrop this page
	   doesn't have), so it renders invisible and just eats vertical space. */
	:global(.svgd-title) {
		display: none;
	}
</style>
