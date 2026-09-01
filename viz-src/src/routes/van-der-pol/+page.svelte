<script lang="ts">
	import PageHeader from '$lib/PageHeader.svelte';
	import VanDerPolOscillator from './VanDerPolOscillator.svelte';
</script>

<svelte:head>
	<title>Van der Pol Limit Cycle — Alec Helbling</title>
</svelte:head>

<PageHeader
	title="Van der Pol Limit Cycle"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="May 18, 2026"
/>

<VanDerPolOscillator />
