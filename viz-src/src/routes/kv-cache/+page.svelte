<script lang="ts">
	import { writable } from 'svelte/store';
	import PageHeader from '$lib/PageHeader.svelte';
	import KVCacheFigure from './KVCacheFigure.svelte';

	const isActive = writable(true);
</script>

<svelte:head>
	<title>KV Caching in Autoregressive Transformers — Alec Helbling</title>
</svelte:head>

<PageHeader
	title="KV Caching in Autoregressive Transformers"
	subtitle="Prefill once, then reuse keys and values during decoding"
	author="Alec Helbling"
	authorLink="https://alechelbling.com"
	date="July 11, 2026"
/>

<p class="lede">
	Autoregressive transformers generate one token at a time. A key-value cache
	stores the attention keys and values computed for earlier tokens, allowing
	each decoding step to reuse that work instead of recomputing the full prefix.
</p>

<div class="figure-shell">
	<KVCacheFigure {isActive} darkMode={true} width={1000} />
</div>

<p class="caption">
	The prompt fills the cache during prefill. Each decoding step then reads the
	existing cache, computes one new key-value pair per layer, appends it, and
	produces the next token.
</p>

<style>
	.lede,
	.caption {
		max-width: 760px;
	}

	.figure-shell {
		margin: 2rem calc(50% - 50vw) 0;
		padding: clamp(1rem, 3vw, 2.5rem) max(1rem, calc((100vw - 1100px) / 2));
		background: #151a23;
	}

	.caption {
		margin: 1rem auto 3rem;
		color: var(--muted-color);
		font-size: 0.95rem;
	}

	@media (max-width: 700px) {
		.figure-shell {
			overflow-x: auto;
		}
	}
</style>
