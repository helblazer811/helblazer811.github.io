<script lang="ts">
	import '../app.css';
	import PageShell from '$lib/PageShell.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Alec Helbling — Visualizations</title>
</svelte:head>

<PageShell>
	{@render children()}
</PageShell>
