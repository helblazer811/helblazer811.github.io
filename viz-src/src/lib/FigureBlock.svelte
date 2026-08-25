<script lang="ts">
	// Trimmed port of DiffusionExplorer's packages/ui Figure.svelte: a figure
	// wrapper that tracks scroll + tab visibility and exposes an `isActive`
	// store so the figure inside can pause its animation off-screen.
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	export let children = undefined;
	export let caption = undefined;
	export let backgroundVisible = true;
	export let isActive = writable(false);

	let figureElement;
	let observer = null;
	let isInViewport = false;
	let isTabVisible = true;

	function updateActiveState() {
		isActive.set(isInViewport && isTabVisible);
	}

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					isInViewport = entry.isIntersecting;
					updateActiveState();
				});
			},
			{ threshold: 0, rootMargin: '50px' }
		);

		if (figureElement) {
			observer.observe(figureElement);
		}

		const handleVisibilityChange = () => {
			isTabVisible = !document.hidden;
			updateActiveState();
		};

		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<figure class="figure" class:no-background-figure={!backgroundVisible} bind:this={figureElement}>
	<div class="figure-content" class:no-background={!backgroundVisible}>
		{@render children?.()}
	</div>
	<figcaption class="figure-caption">
		{@render caption?.()}
	</figcaption>
</figure>

<style>
	.figure {
		position: relative;
		width: 100%;
		margin: 2rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.figure-content {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f9f9f9;
		border: 1px solid var(--border-color);
		border-radius: 4px;
		user-select: none;
		-webkit-user-select: none;
	}

	.figure-content.no-background {
		background-color: transparent;
		border: none;
	}

	.figure.no-background-figure {
		margin-top: 0.5rem;
	}

	.figure-caption {
		font-size: 1.05rem;
		line-height: 1.5;
		color: var(--muted-color);
		text-align: left;
	}
</style>
