<script lang="ts">
	import PageHeader from '$lib/PageHeader.svelte';
	import LorenzAttractor from './LorenzAttractor.svelte';
</script>

<svelte:head>
	<title>The Lorenz Attractor — Alec Helbling</title>
</svelte:head>

<PageHeader
	title="The Lorenz Attractor"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="May 19, 2026"
/>

<LorenzAttractor />
