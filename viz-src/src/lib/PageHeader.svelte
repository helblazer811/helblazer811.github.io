<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		author?: string;
		authorLink?: string;
		date?: string;
	}

	let { title, subtitle, author, authorLink, date }: Props = $props();
</script>

<header class="page-header">
	<h1 class="title">{title}</h1>
	{#if subtitle}
		<p class="subtitle">{subtitle}</p>
	{/if}
	{#if author || date}
		<div class="byline-dateline">
			{#if author}
				<p class="byline">
					By {#if authorLink}<a href={authorLink}>{author}</a>{:else}{author}{/if}
				</p>
			{/if}
			{#if date}
				<p class="dateline">{date}</p>
			{/if}
		</div>
	{/if}
</header>

<style>
	.title {
		font-size: 2.2em;
		margin-bottom: 0;
	}

	.subtitle {
		font-size: 1.3em;
		font-weight: normal;
		font-style: italic;
		color: var(--muted-color);
		margin-top: 0.3em;
		margin-bottom: 0;
	}

	.byline-dateline {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-top: 1em;
		margin-bottom: 2em;
	}

	.byline {
		margin: 0;
		font-size: 1rem;
	}

	.dateline {
		margin: 0;
		color: var(--date-color);
		font-size: 1rem;
	}
</style>
