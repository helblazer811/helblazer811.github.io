<script lang="ts">
	interface Props {
		src: string;
		poster: string;
		fallback: string;
		caption: string;
		aspectRatio?: string;
	}

	let {
		src,
		poster,
		fallback,
		caption,
		aspectRatio = '16 / 10'
	}: Props = $props();
</script>

<figure>
	<video
		autoplay
		muted
		loop
		playsinline
		controls
		preload="metadata"
		{poster}
		style:aspect-ratio={aspectRatio}
	>
		<source {src} type="video/mp4" />
		{fallback}
	</video>
	<figcaption>{caption}</figcaption>
</figure>

<style>
	figure {
		margin: 1.5rem 0 0;
	}

	video {
		display: block;
		width: 100%;
		height: auto;
		background: #ffffff;
		border: 1px solid var(--border-color);
	}

	figcaption {
		margin-top: 0.75rem;
		color: var(--muted-color);
		font-size: 0.95rem;
		line-height: 1.5;
		text-align: center;
	}
</style>
