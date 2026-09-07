<script lang="ts">
	import { onMount } from 'svelte';

	type Phase = 0 | 1 | 2;
	type Logit = { token: string; probability: number };

	const phases = [
		{ label: 'Predict now', detail: 'The current state becomes a next-token distribution.' },
		{ label: 'Store context', detail: 'Every layer also leaves behind a reusable key and value.' },
		{ label: 'Use later', detail: 'A future query retrieves that context to make a later prediction.' }
	];
	const earlyTokens = ['The', 'capital', 'of', 'France'];
	const laterTokens = ['The', 'capital', 'of', 'France', 'is'];
	const earlyLogits: Logit[] = [
		{ token: 'is', probability: 0.57 },
		{ token: 'was', probability: 0.23 },
		{ token: ',', probability: 0.12 }
	];
	const laterLogits: Logit[] = [
		{ token: 'Paris', probability: 0.78 },
		{ token: 'Lyon', probability: 0.11 },
		{ token: 'Europe', probability: 0.06 }
	];

	let phase: Phase = $state(0);
	let playing = $state(true);
	let timer: ReturnType<typeof setInterval> | null = null;

	function choosePhase(next: Phase) {
		phase = next;
		playing = false;
	}

	function togglePlaying() {
		playing = !playing;
	}

	onMount(() => {
		timer = setInterval(() => {
			if (playing) phase = ((phase + 1) % 3) as Phase;
		}, 3600);
		return () => {
			if (timer) clearInterval(timer);
		};
	});
</script>

<section class="dual-role" aria-labelledby="dual-role-title" class:phase-predict={phase === 0} class:phase-store={phase === 1} class:phase-reuse={phase === 2}>
	<div class="figure-heading">
		<div>
			<p class="eyebrow">One representation, two jobs</p>
			<h2 id="dual-role-title">Predict the next token. Preserve context for future tokens.</h2>
		</div>
		<button class="play-control" type="button" onclick={togglePlaying} aria-label={playing ? 'Pause animation' : 'Play animation'}>
			<span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
			{playing ? 'Pause' : 'Play'}
		</button>
	</div>

	<div class="phase-controls" aria-label="Animation steps">
		{#each phases as item, index}
			<button
				type="button"
				class:active={phase === index}
				aria-pressed={phase === index}
				onclick={() => choosePhase(index as Phase)}
			>
				<span class="phase-number">{index + 1}</span>
				<span>{item.label}</span>
			</button>
		{/each}
	</div>

	<p class="phase-detail" aria-live="polite">{phases[phase].detail}</p>

	<div class="comparison">
		<article class="network-panel early-panel">
			<header class="panel-header">
				<div>
					<p class="step-label">Decode step <i>t</i></p>
					<h3>Use the state now</h3>
				</div>
				<span class="purpose-badge prediction-badge">next-token prediction</span>
			</header>

			<div class="network-grid early-grid" style={`--token-count:${earlyTokens.length}`}>
				<div class="row-label">tokens</div>
				<div class="network-row token-row">
					{#each earlyTokens as token, index}
						<div class:current={index === 3} class="token">{token}</div>
					{/each}
				</div>

				{#each [1, 2, 3] as layer}
					<div class="row-label">layer {layer}</div>
					<div class="network-row layer-row">
						{#each earlyTokens as _token, index}
							<div class:current-state={index === 3} class:final-state={index === 3 && layer === 3} class="state-cell">
								{#if index === 3}<span>h<sub>t</sub><sup>{layer}</sup></span>{/if}
							</div>
						{/each}
					</div>
				{/each}
			</div>

			<div class="state-meaning early-meaning">
				<span class="state-dot"></span>
				<div><strong>h<sub>t</sub></strong><span>“France” in the capital-of context</span></div>
			</div>

			<div class="fork" aria-hidden="true">
				<span></span><span></span><span></span>
			</div>

			<div class="logits early-logits">
				<p><span>Unembed h<sub>t</sub></span><strong>p(x<sub>t+1</sub> | x<sub>≤t</sub>)</strong></p>
				{#each earlyLogits as logit}
					<div class="logit-row">
						<code>{logit.token}</code>
						<div class="bar-track"><span style={`--bar:${logit.probability * 100}%`}></span></div>
						<output>{Math.round(logit.probability * 100)}%</output>
					</div>
				{/each}
			</div>

			<div class="cache-note">
				<span class="kv-pair"><b>K</b><b>V</b></span>
				<div><strong>Also cached</strong><span>Layer-wise keys and values remain available.</span></div>
			</div>
		</article>

		<div class="time-bridge" aria-label="The same prefix representation is retained at later decoding steps">
			<span class="bridge-line"></span>
			<span class="bridge-label">same prefix<br />later in time</span>
			<span class="bridge-arrow">›</span>
		</div>

		<article class="network-panel later-panel">
			<header class="panel-header">
				<div>
					<p class="step-label">Decode step <i>t + 1</i></p>
					<h3>Reuse the state later</h3>
				</div>
				<span class="purpose-badge context-badge">context memory</span>
			</header>

			<div class="network-grid later-grid" style={`--token-count:${laterTokens.length}`}>
				<div class="row-label">tokens</div>
				<div class="network-row token-row">
					{#each laterTokens as token, index}
						<div class:remembered-token={index === 3} class:future-token={index === 4} class="token">{token}</div>
					{/each}
				</div>

				{#each [1, 2, 3] as layer}
					<div class="row-label">layer {layer}</div>
					<div class="network-row layer-row layer-{layer}">
						{#each laterTokens as _token, index}
							<div
								class:cached-state={index === 3 && layer === 2}
								class:query-state={index === 4 && layer === 2}
								class:future-state={index === 4}
								class:future-final={index === 4 && layer === 3}
								class="state-cell"
							>
								{#if index === 3 && layer === 2}<span>K<sub>t</sub>, V<sub>t</sub></span>{/if}
								{#if index === 4 && layer === 2}<span>q<sub>t+1</sub></span>{/if}
								{#if index === 4 && layer === 3}<span>h<sub>t+1</sub></span>{/if}
							</div>
						{/each}
						{#if layer === 2}
							<div class="attention-link" aria-hidden="true"><span>query retrieves context</span></div>
						{/if}
					</div>
				{/each}
			</div>

			<div class="state-meaning later-meaning">
				<span class="state-dot"></span>
				<div><strong>cached h<sub>t</sub><sup>2</sup></strong><span>country = France · relation = capital</span></div>
			</div>

			<div class="output-arrow" aria-hidden="true"></div>

			<div class="logits later-logits">
				<p><span>Unembed h<sub>t+1</sub></span><strong>p(x<sub>t+2</sub> | x<sub>≤t+1</sub>)</strong></p>
				{#each laterLogits as logit}
					<div class="logit-row">
						<code>{logit.token}</code>
						<div class="bar-track"><span style={`--bar:${logit.probability * 100}%`}></span></div>
						<output>{Math.round(logit.probability * 100)}%</output>
					</div>
				{/each}
			</div>
		</article>
	</div>

	<div class="takeaway">
		<span class="takeaway-icon">h<sub>t</sub></span>
		<p><strong>A token representation is both an answer and a memory.</strong> It is decoded into uncertainty about what comes next, while its layer-wise keys and values preserve what future tokens may need.</p>
	</div>
</section>

<style>
	.dual-role {
		--bg: #151a23;
		--panel: #1c222d;
		--panel-2: #202734;
		--line: #3d485a;
		--text: #dce3ed;
		--muted: #929eaf;
		--blue: #6ea8ff;
		--blue-soft: rgba(110, 168, 255, 0.16);
		--orange: #ff9d4d;
		--orange-soft: rgba(255, 157, 77, 0.16);
		--lime: #e6f05a;
		--lime-soft: rgba(230, 240, 90, 0.14);
		--violet: #b49cff;
		--violet-soft: rgba(180, 156, 255, 0.15);
		box-sizing: border-box;
		width: 100%;
		min-width: 0;
		padding: clamp(1.1rem, 2.8vw, 2.25rem);
		background: var(--bg);
		color: var(--text);
		border: 1px solid #2f3948;
		border-radius: 8px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	}

	.dual-role *, .dual-role *::before, .dual-role *::after { box-sizing: border-box; }

	.figure-heading, .panel-header, .phase-controls, .comparison, .takeaway,
	.state-meaning, .cache-note, .logit-row { display: flex; }

	.figure-heading { justify-content: space-between; gap: 1rem; align-items: flex-start; }
	.eyebrow, .step-label { color: var(--orange); font-size: 0.74rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; margin: 0 0 0.35rem; }
	h2 { font-size: clamp(1.15rem, 2vw, 1.55rem); line-height: 1.25; margin: 0; max-width: 760px; }
	h3 { font-size: 1rem; margin: 0; }

	.play-control, .phase-controls button {
		appearance: none;
		border: 1px solid var(--line);
		background: transparent;
		color: var(--muted);
		font: inherit;
		cursor: pointer;
	}
	.play-control { border-radius: 5px; padding: 0.45rem 0.65rem; display: flex; gap: 0.45rem; align-items: center; }
	.play-control:hover, .phase-controls button:hover { color: var(--text); border-color: #647187; }

	.phase-controls { margin: 1.4rem 0 0; gap: 0.5rem; flex-wrap: wrap; }
	.phase-controls button { padding: 0.48rem 0.75rem; border-radius: 999px; display: flex; align-items: center; gap: 0.45rem; }
	.phase-controls button.active { color: #121721; background: var(--orange); border-color: var(--orange); }
	.phase-number { display: grid; place-items: center; width: 1.2rem; height: 1.2rem; border: 1px solid currentColor; border-radius: 50%; font-size: 0.72rem; }
	.phase-detail { min-height: 1.4em; color: var(--muted); font-size: 0.9rem; margin: 0.65rem 0 1.25rem; }

	.comparison { align-items: stretch; gap: 0.75rem; }
	.network-panel { position: relative; flex: 1 1 0; min-width: 0; padding: 1rem; background: var(--panel); border: 1px solid var(--line); border-radius: 6px; overflow: hidden; }
	.panel-header { justify-content: space-between; align-items: flex-start; gap: 0.65rem; margin-bottom: 1.05rem; }
	.purpose-badge { white-space: nowrap; border-radius: 999px; padding: 0.3rem 0.5rem; font-size: 0.67rem; font-weight: 700; letter-spacing: 0.03em; }
	.prediction-badge { color: var(--orange); background: var(--orange-soft); }
	.context-badge { color: var(--lime); background: var(--lime-soft); }

	.network-grid { --token-count: 4; display: grid; grid-template-columns: 42px 1fr; row-gap: 0.42rem; align-items: center; }
	.row-label { color: var(--muted); font-size: 0.62rem; text-transform: uppercase; letter-spacing: 0.07em; text-align: right; padding-right: 0.45rem; }
	.network-row { position: relative; display: grid; grid-template-columns: repeat(var(--token-count), minmax(0, 1fr)); gap: clamp(0.25rem, 0.8vw, 0.55rem); }
	.token { min-width: 0; padding: 0.38rem 0.12rem; text-align: center; color: var(--text); background: var(--panel-2); border: 1px solid var(--line); border-radius: 4px; font: 600 clamp(0.64rem, 1vw, 0.76rem) ui-monospace, SFMono-Regular, Menlo, monospace; overflow: hidden; text-overflow: ellipsis; }
	.token.current, .token.future-token { color: var(--orange); border-color: var(--orange); background: var(--orange-soft); }
	.token.remembered-token { color: var(--lime); border-color: rgba(230, 240, 90, 0.56); }
	.state-cell { position: relative; height: 2rem; border: 1px solid var(--line); border-radius: 4px; background: #252c39; display: grid; place-items: center; color: var(--muted); font: 600 0.68rem ui-monospace, SFMono-Regular, Menlo, monospace; transition: border-color 320ms ease, background 320ms ease, box-shadow 320ms ease, color 320ms ease; }
	.state-cell::before { content: ''; position: absolute; width: 1px; height: 0.45rem; left: 50%; top: -0.47rem; background: var(--line); }

	.current-state { border-color: rgba(255, 157, 77, 0.42); background: rgba(255, 157, 77, 0.07); }
	.final-state, .future-final { color: var(--orange); border-color: var(--orange); }
	.future-state { border-color: rgba(110, 168, 255, 0.55); background: var(--blue-soft); }
	.cached-state { z-index: 2; color: #111600; background: var(--lime); border-color: var(--lime); }
	.query-state { z-index: 2; color: #171122; background: var(--violet); border-color: var(--violet); }

	.state-meaning { position: relative; align-items: center; gap: 0.55rem; margin: 0.8rem 0 0 42px; padding: 0.52rem 0.65rem; color: var(--muted); background: #171c25; border-left: 2px solid var(--line); font-size: 0.7rem; opacity: 0.45; transition: opacity 300ms ease, border-color 300ms ease; }
	.state-meaning div, .cache-note div { display: flex; flex-direction: column; min-width: 0; }
	.state-meaning strong, .cache-note strong { color: var(--text); }
	.state-dot { flex: 0 0 auto; width: 0.55rem; height: 0.55rem; border-radius: 2px; background: var(--orange); }
	.later-meaning .state-dot { background: var(--lime); }

	.fork { position: relative; width: calc(100% - 42px); height: 1.35rem; margin-left: 42px; }
	.fork span:first-child { position: absolute; left: 75%; top: 0; height: 0.75rem; border-left: 1px solid var(--orange); }
	.fork span:nth-child(2) { position: absolute; left: 18%; right: 25%; top: 0.72rem; border-top: 1px solid var(--orange); }
	.fork span:last-child { position: absolute; left: 18%; top: 0.72rem; height: 0.62rem; border-left: 1px solid var(--orange); }

	.logits { margin-left: 42px; padding: 0.65rem; background: #171c25; border: 1px solid var(--line); border-radius: 5px; opacity: 0.45; transition: opacity 300ms ease, border-color 300ms ease; }
	.logits > p { display: flex; justify-content: space-between; gap: 0.6rem; color: var(--muted); font-size: 0.67rem; margin: 0 0 0.48rem; }
	.logits > p strong { color: var(--text); font-weight: 600; }
	.logit-row { align-items: center; gap: 0.45rem; margin: 0.28rem 0; }
	.logit-row code { width: 3.4rem; color: var(--text); font-size: 0.68rem; text-align: right; }
	.logit-row output { width: 2rem; color: var(--muted); font-size: 0.65rem; text-align: right; }
	.bar-track { flex: 1; height: 0.35rem; border-radius: 999px; background: #2a3342; overflow: hidden; }
	.bar-track span { display: block; width: 0; height: 100%; background: var(--orange); border-radius: inherit; transition: width 650ms cubic-bezier(.2,.8,.2,1); }

	.cache-note { align-items: center; gap: 0.55rem; margin: 0.7rem 0 0 42px; color: var(--muted); font-size: 0.68rem; opacity: 0.35; transition: opacity 300ms ease; }
	.kv-pair { display: flex; gap: 2px; }
	.kv-pair b { display: grid; place-items: center; width: 1.35rem; height: 1.35rem; border-radius: 3px; color: #111600; background: var(--lime); font-size: 0.65rem; }
	.kv-pair b:last-child { color: #171122; background: var(--violet); }

	.time-bridge { flex: 0 0 64px; position: relative; display: grid; place-items: center; color: var(--muted); }
	.bridge-line { position: absolute; left: 0; right: 0; top: 45%; border-top: 1px dashed #536076; }
	.bridge-label { z-index: 1; padding: 0.28rem; background: var(--bg); text-align: center; font-size: 0.62rem; line-height: 1.25; }
	.bridge-arrow { position: absolute; right: -0.05rem; top: calc(45% - 0.9rem); color: var(--lime); font-size: 1.65rem; }

	.attention-link { position: absolute; z-index: 3; left: 70%; width: 18%; top: -0.65rem; height: 0.75rem; border-top: 2px solid var(--violet); border-left: 2px solid var(--violet); border-radius: 0.8rem 0 0 0; opacity: 0.2; transition: opacity 300ms ease; }
	.attention-link::after { content: ''; position: absolute; left: -0.28rem; top: -0.28rem; border-top: 4px solid transparent; border-bottom: 4px solid transparent; border-right: 6px solid var(--violet); }
	.attention-link span { position: absolute; right: 0; top: -1.05rem; width: 8.6rem; color: var(--violet); font-size: 0.59rem; text-align: right; white-space: nowrap; }

	.output-arrow { height: 1.35rem; width: 1px; margin: 0 16% 0 auto; background: var(--orange); opacity: 0.25; transition: opacity 300ms ease; }
	.output-arrow::after { content: ''; display: block; transform: translate(-3px, 1.05rem); border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 6px solid var(--orange); }
	.later-logits { margin-top: 0; }

	.takeaway { align-items: center; gap: 0.8rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--line); }
	.takeaway-icon { flex: 0 0 auto; display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border-radius: 5px; color: var(--orange); border: 1px solid var(--orange); background: var(--orange-soft); font: 700 0.85rem ui-monospace, SFMono-Regular, Menlo, monospace; }
	.takeaway p { margin: 0; color: var(--muted); font-size: 0.82rem; line-height: 1.45; }
	.takeaway strong { color: var(--text); }

	.phase-predict .early-meaning, .phase-predict .early-logits { opacity: 1; }
	.phase-predict .early-logits { border-color: rgba(255, 157, 77, 0.7); }
	.phase-predict .early-logits .bar-track span { width: var(--bar); }
	.phase-predict .final-state { box-shadow: 0 0 0 3px var(--orange-soft), 0 0 18px rgba(255, 157, 77, 0.18); }

	.phase-store .early-meaning, .phase-store .cache-note, .phase-store .later-meaning { opacity: 1; }
	.phase-store .early-meaning, .phase-store .later-meaning { border-color: var(--lime); }
	.phase-store .cached-state { box-shadow: 0 0 0 3px var(--lime-soft), 0 0 18px rgba(230, 240, 90, 0.16); }
	.phase-store .bridge-line { border-color: var(--lime); }

	.phase-reuse .later-meaning, .phase-reuse .attention-link, .phase-reuse .output-arrow, .phase-reuse .later-logits { opacity: 1; }
	.phase-reuse .later-logits { border-color: rgba(255, 157, 77, 0.7); }
	.phase-reuse .later-logits .bar-track span { width: var(--bar); }
	.phase-reuse .query-state { box-shadow: 0 0 0 3px var(--violet-soft), 0 0 18px rgba(180, 156, 255, 0.2); }

	@media (prefers-reduced-motion: reduce) {
		.state-cell, .state-meaning, .cache-note, .logits, .bar-track span, .attention-link, .output-arrow { transition: none; }
	}

	@media (max-width: 900px) {
		.comparison { flex-direction: column; }
		.time-bridge { flex-basis: 44px; min-height: 44px; }
		.bridge-line { left: 50%; right: auto; top: 0; bottom: 0; border-top: 0; border-left: 1px dashed #536076; }
		.bridge-label { padding: 0.2rem 0.45rem; }
		.bridge-arrow { right: calc(50% - 0.34rem); top: auto; bottom: -0.28rem; transform: rotate(90deg); }
	}

	@media (max-width: 520px) {
		.dual-role { padding: 0.8rem; }
		.figure-heading { align-items: flex-end; }
		.play-control { font-size: 0.74rem; }
		.phase-controls button { flex: 1 1 auto; justify-content: center; padding-inline: 0.45rem; font-size: 0.72rem; }
		.network-panel { padding: 0.72rem; }
		.panel-header { flex-direction: column; }
		.network-grid { grid-template-columns: 32px 1fr; }
		.row-label { padding-right: 0.3rem; font-size: 0.54rem; }
		.state-meaning, .logits, .cache-note { margin-left: 32px; }
		.fork { width: calc(100% - 32px); margin-left: 32px; }
		.logits > p { flex-direction: column; gap: 0.15rem; }
		.attention-link span { display: none; }
		.takeaway { align-items: flex-start; }
	}
</style>
