<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<nav class="top-nav">
	<a href="https://alechelbling.com/blog.html" class="nav-link">&larr; Back to Blog</a>
</nav>

<div class="page-container">
	{@render children()}
</div>

<style>
	.top-nav {
		max-width: var(--page-max-width);
		margin: 0 auto;
		padding: 1.5rem 1.5rem 0;
	}

	.nav-link {
		font-size: 0.9rem;
		color: var(--muted-color);
	}

	.nav-link:hover {
		color: var(--link-hover-color);
	}

	.page-container {
		max-width: var(--page-max-width);
		margin: 0 auto;
		padding: 1.5rem 1.5rem 4rem;
	}
</style>
