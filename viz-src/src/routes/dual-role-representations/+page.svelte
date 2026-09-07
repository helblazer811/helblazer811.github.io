<script lang="ts">
	import { onMount } from 'svelte';
	import PageHeader from '$lib/PageHeader.svelte';
	import DualRoleFigure from './DualRoleFigure.svelte';

	onMount(() => {
		document.documentElement.classList.add('representation-dark-page');
		document.body.classList.add('representation-dark-page');
		return () => {
			document.documentElement.classList.remove('representation-dark-page');
			document.body.classList.remove('representation-dark-page');
		};
	});
</script>

<svelte:head>
	<title>The Dual Role of Token Representations — Alec Helbling</title>
	<meta name="description" content="How transformer representations both predict the next token and preserve context for future tokens." />
	<meta name="theme-color" content="#151a23" />
</svelte:head>

<PageHeader
	title="The Dual Role of Token Representations"
	subtitle="A hidden state is both a prediction and a memory"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="September 6, 2026"
/>

<p class="lede">
	At each position, a transformer representation has two responsibilities. It must support a distribution over the next token now, while preserving information that later tokens can retrieve through attention.
</p>

<div class="figure-shell">
	<DualRoleFigure />
</div>

<p class="caption">
	The highlighted state for “France” first supports uncertainty over what follows. One layer later in the sequence, its cached key and value supply the country context that helps the model predict “Paris.”
</p>

<style>
	:global(html.representation-dark-page),
	:global(body.representation-dark-page) {
		--text-color: #dce3ed;
		--muted-color: #9da8b8;
		--date-color: #9da8b8;
		--border-color: #354052;
		--link-color: #80b3ff;
		--link-hover-color: #ffad66;
		background: #151a23;
		color: #dce3ed;
		color-scheme: dark;
	}

	.lede, .caption { max-width: 780px; }
	.figure-shell {
		margin: 2rem calc(50% - 50vw) 0;
		padding: clamp(0.75rem, 2vw, 1.5rem) max(0.75rem, calc((100vw - 1280px) / 2));
		background: #151a23;
	}
	.caption { margin: 1rem auto 3rem; color: #9da8b8; font-size: 0.95rem; }
</style>
