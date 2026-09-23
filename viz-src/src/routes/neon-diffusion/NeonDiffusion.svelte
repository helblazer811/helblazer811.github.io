<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { base } from '$app/paths';
	import { Player, TimelineBuilder, downloadBlob, streamingVideoExport } from '@helblazer811/tempus';

	type State = { progress: number };
	type ModelPoint = [number, number];
	type Trajectories = ModelPoint[][];

	const VIEW_W = 480;
	const VIEW_H = 270;
	const EXPORT_W = 1920;
	const EXPORT_H = 1080;
	const PASS_DURATION_MS = 12_000;
	const PAUSE_DURATION_MS = 300;
	const DURATION_MS = (PASS_DURATION_MS + PAUSE_DURATION_MS) * 2;
	const FPS = 30;
	const FRAME_COUNT = (DURATION_MS / 1000) * FPS;
	const COUNT = 360;
	const DISPLAY_COUNT = 300;
	const CONTOUR_SAMPLE_COUNT = 2400;
	const GAUSSIAN_X = 125;
	const DATA_X = 355;
	const DISTRIBUTION_Y = 118;
	const DISTRIBUTION_SCALE = 44;
	const PIXEL_FONT: Record<string, string[]> = {
		A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
		C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'],
		D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
		E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
		F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
		G: ['01111', '10000', '10000', '10111', '10001', '10001', '01111'],
		I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
		L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
		M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
		N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
		O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
		P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
		R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
		S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
		T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
		U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
		V: ['10001', '10001', '10001', '10001', '10001', '01010', '00100'],
		W: ['10001', '10001', '10001', '10101', '10101', '10101', '01010']
	};

	let canvas: HTMLCanvasElement;
	let lowCanvas: HTMLCanvasElement;
	let player: Player<State> | undefined;
	let progress = $state(0);
	let exporting = $state(false);
	let trajectories: Trajectories = [];
	let phases: number[] = [];
	let delays: number[] = [];
	let dataContourSegments: { x1: number; y1: number; x2: number; y2: number; level: number }[] = [];

	const clamp = (v: number) => Math.max(0, Math.min(1, v));
	const mix = (a: number, b: number, t: number) => a + (b - a) * t;
	const ease = (v: number) => {
		const t = clamp(v);
		return t * t * t * (t * (t * 6 - 15) + 10);
	};

	function mulberry32(seed: number) {
		return () => {
			let t = (seed += 0x6d2b79f5);
			t = Math.imul(t ^ (t >>> 15), t | 1);
			t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	const random = mulberry32(811);
	function initializeParticleMetadata() {
		phases = Array.from({ length: COUNT }, () => random() * Math.PI * 2);
		delays = Array.from({ length: COUNT }, () => random() * 0.055);
	}

	async function loadTrainedDiffusionSimulation() {
		const response = await fetch(`${base}/neon-diffusion/trajectories.json`);
		if (!response.ok) throw new Error(`Could not load trained trajectories: ${response.status}`);
		trajectories = (await response.json()) as Trajectories;
		computeDataContours();
		player?.pause();
		player?.seek(0);
		progress = 0;
		render();
		player?.play();
	}

	function computeDataContours() {
		const contourRandom = mulberry32(2407);
		const contourSamples: ModelPoint[] = [];
		const normal = () => {
			const radius = Math.sqrt(-2 * Math.log(Math.max(contourRandom(), 1e-6)));
			return radius * Math.cos(contourRandom() * Math.PI * 2);
		};
		const eyeCount = Math.floor(CONTOUR_SAMPLE_COUNT / 6);
		for (let i = 0; i < eyeCount; i += 1) {
			contourSamples.push([-1.014 + normal() * 0.082, -0.993 + normal() * 0.098]);
			contourSamples.push([0.991 + normal() * 0.088, -1.015 + normal() * 0.100]);
		}
		for (let i = eyeCount * 2; i < CONTOUR_SAMPLE_COUNT; i += 1) {
			const x = mix(-1.33, 1.4, contourRandom());
			const y = 1.538 + 0.012 * x - 0.400 * x * x + normal() * 0.091;
			contourSamples.push([x, y]);
		}
		const x0 = 270;
		const y0 = 20;
		const step = 3;
		const cols = 61;
		const rows = 67;
		const sigma2 = 8 * 8;
		const values = Array.from({ length: rows }, (_, row) =>
			Array.from({ length: cols }, (_, col) => {
				const x = x0 + col * step;
				const y = y0 + row * step;
				let density = 0;
				for (const [mx, my] of contourSamples) {
					const px = DATA_X + mx * DISTRIBUTION_SCALE;
					const py = DISTRIBUTION_Y + my * DISTRIBUTION_SCALE;
					const d2 = (x - px) ** 2 + (y - py) ** 2;
					density += Math.exp(-d2 / (2 * sigma2));
				}
				return density;
			})
		);
		const maximum = Math.max(...values.flat());
		const levels = [0.10, 0.24, 0.46].map((fraction) => maximum * fraction);
		dataContourSegments = [];

		const edgePoint = (edge: number, col: number, row: number, threshold: number) => {
			const tl = values[row][col];
			const tr = values[row][col + 1];
			const br = values[row + 1][col + 1];
			const bl = values[row + 1][col];
			const lerpEdge = (a: number, b: number) => clamp((threshold - a) / (b - a || 1));
			if (edge === 0) return [x0 + (col + lerpEdge(tl, tr)) * step, y0 + row * step];
			if (edge === 1) return [x0 + (col + 1) * step, y0 + (row + lerpEdge(tr, br)) * step];
			if (edge === 2) return [x0 + (col + lerpEdge(bl, br)) * step, y0 + (row + 1) * step];
			return [x0 + col * step, y0 + (row + lerpEdge(tl, bl)) * step];
		};

		const cases: Record<number, [number, number][]> = {
			1: [[3, 2]], 2: [[2, 1]], 3: [[3, 1]], 4: [[0, 1]],
			5: [[0, 1], [2, 3]], 6: [[0, 2]], 7: [[0, 3]], 8: [[3, 0]],
			9: [[0, 2]], 10: [[3, 0], [1, 2]], 11: [[0, 1]], 12: [[3, 1]],
			13: [[2, 1]], 14: [[3, 2]]
		};

		levels.forEach((threshold, level) => {
			for (let row = 0; row < rows - 1; row += 1) {
				for (let col = 0; col < cols - 1; col += 1) {
					const code =
						(values[row][col] >= threshold ? 8 : 0) |
						(values[row][col + 1] >= threshold ? 4 : 0) |
						(values[row + 1][col + 1] >= threshold ? 2 : 0) |
						(values[row + 1][col] >= threshold ? 1 : 0);
					for (const [edgeA, edgeB] of cases[code] ?? []) {
						const [x1, y1] = edgePoint(edgeA, col, row, threshold);
						const [x2, y2] = edgePoint(edgeB, col, row, threshold);
						dataContourSegments.push({ x1, y1, x2, y2, level });
					}
				}
			}
		});
	}

	function drawDataContours(ctx: CanvasRenderingContext2D, t: number) {
		const lockAge = clamp((t - 0.77) / 0.075);
		const locking = t >= 0.77 && t <= 0.845;
		const lockPulse = locking ? Math.sin(lockAge * Math.PI) : 0;
		const lockScale = locking ? 1 + 0.055 * (1 - ease(lockAge)) : 1;
		ctx.save();
		ctx.translate(DATA_X, DISTRIBUTION_Y);
		ctx.scale(lockScale, lockScale);
		ctx.translate(-DATA_X, -DISTRIBUTION_Y);
		ctx.lineWidth = 1.65 + lockPulse * 1.6;
		for (const segment of dataContourSegments) {
			const alpha = 0.20 + segment.level * 0.09 + lockPulse * 0.34;
			ctx.strokeStyle = `rgba(69, 157, 255, ${alpha})`;
			ctx.beginPath();
			ctx.moveTo(segment.x1, segment.y1);
			ctx.lineTo(segment.x2, segment.y2);
			ctx.stroke();
		}
		ctx.restore();
	}

	function makeTimeline() {
		const animation = {
			name: 'neon-diffusion-loop',
			reduce(t: number): Partial<State> {
				return { progress: t };
			}
		};
		const pause = {
			name: 'neon-diffusion-pause',
			reduce(): Partial<State> {
				return { progress: 1 };
			}
		};
		return new TimelineBuilder<State>()
			.setInitialState({ progress: 0 })
			.add(animation, { durationMs: PASS_DURATION_MS })
			.add(pause, { durationMs: PAUSE_DURATION_MS })
			.add(animation, { durationMs: PASS_DURATION_MS })
			.add(pause, { durationMs: PAUSE_DURATION_MS })
			.build();
	}

	function particleAmount(t: number, delay: number) {
		t = Number.isFinite(t) ? t : 0;
		if (t < 0.08) return 0;
		if (t < 0.39) return ease((t - 0.08 - delay) / (0.31 - 0.055));
		if (t < 0.47) return 1;
		if (t < 0.79) return 1 - ease((t - 0.47 - (0.055 - delay)) / (0.32 - 0.055));
		return 0;
	}

	function particlePosition(i: number, t: number) {
		if (!trajectories.length) return { x: -20, y: -20, amount: 0 };
		const amount = particleAmount(t, delays[i]);
		const modelProgress = 1 - amount;
		const stepFloat = clamp(modelProgress) * (trajectories.length - 1);
		const step0 = Math.max(0, Math.min(trajectories.length - 1, Math.floor(stepFloat)));
		const step1 = Math.min(trajectories.length - 1, step0 + 1);
		const stepMix = stepFloat - step0;
		const a = trajectories[step0]?.[i] ?? trajectories[0]?.[i] ?? [0, 0];
		const b = trajectories[step1]?.[i] ?? a;
		const modelX = mix(a[0], b[0], stepMix);
		const modelY = mix(a[1], b[1], stepMix);
		const boundedX = 2.15 * Math.tanh(modelX / 2.15);
		const boundedY = 2.15 * Math.tanh(modelY / 2.15);
		const displayX = mix(modelX, boundedX, amount);
		const displayY = mix(modelY, boundedY, amount);
		const centerX = mix(DATA_X, GAUSSIAN_X, amount);
		const transitionActive = t >= 0.08 && t < 0.79;
		const noiseStrength = transitionActive ? 0.35 + amount * 1.55 : 0.18;
		const phase = phases[i] ?? 0;
		const noiseX = noiseStrength * (
			0.72 * Math.sin(t * 20 + phase * 1.31) +
			0.28 * Math.sin(t * 43 + phase * 0.67)
		);
		const noiseY = noiseStrength * (
			0.72 * Math.cos(t * 18 + phase * 1.73) +
			0.28 * Math.sin(t * 39 + phase * 0.91)
		);
		return {
			x: centerX + displayX * DISTRIBUTION_SCALE + noiseX,
			y: DISTRIBUTION_Y + displayY * DISTRIBUTION_SCALE + noiseY,
			amount
		};
	}

	function stageLabel(t: number) {
		if (t < 0.08) return 'DATA MANIFOLD';
		if (t < 0.39) return 'FORWARD DIFFUSION';
		if (t < 0.47) return 'GAUSSIAN NOISE';
		if (t < 0.79) return 'REVERSE PROCESS';
		return 'DATA MANIFOLD';
	}

	function neon(alpha: number) {
		return `rgba(255, 132, 54, ${alpha})`;
	}

	function drawGrid(ctx: CanvasRenderingContext2D, t: number) {
		ctx.fillStyle = '#010405';
		ctx.fillRect(0, 0, VIEW_W, VIEW_H);
		ctx.lineWidth = 1;
		for (let x = 14; x < VIEW_W; x += 16) {
			ctx.strokeStyle = `rgba(35, 92, 154, ${0.12 + 0.025 * Math.sin(t * 8 + x)})`;
			ctx.beginPath();
			ctx.moveTo(x + 0.5, 8);
			ctx.lineTo(x + 0.5, VIEW_H - 8);
			ctx.stroke();
		}
		for (let y = 23; y < VIEW_H; y += 16) {
			ctx.strokeStyle = 'rgba(35, 92, 154, 0.12)';
			ctx.beginPath();
			ctx.moveTo(8, y + 0.5);
			ctx.lineTo(VIEW_W - 8, y + 0.5);
			ctx.stroke();
		}
		ctx.strokeStyle = 'rgba(69, 157, 255, 0.18)';
		ctx.strokeRect(7.5, 7.5, VIEW_W - 15, VIEW_H - 15);
	}

	function drawGuides(ctx: CanvasRenderingContext2D, t: number) {
		const pulse = 1 + Math.sin(t * Math.PI * 12) * 0.018;
		const lockAge = clamp((t - 0.37) / 0.085);
		const locking = t >= 0.37 && t <= 0.455;
		const lockPulse = locking ? Math.sin(lockAge * Math.PI) : 0;
		const lockScale = locking ? 1 + 0.045 * (1 - ease(lockAge)) : 1;
		const rings = [[85, 72], [62, 53], [39, 33]];
		ctx.lineWidth = 1.65 + lockPulse * 1.6;
		rings.forEach(([rx, ry], i) => {
			ctx.strokeStyle = `rgba(69, 157, 255, ${0.23 + i * 0.08 + lockPulse * 0.34})`;
			ctx.beginPath();
			ctx.ellipse(
				GAUSSIAN_X,
				DISTRIBUTION_Y,
				rx * pulse * lockScale,
				ry * pulse * lockScale,
				0,
				0,
				Math.PI * 2
			);
			ctx.stroke();
		});
	}

	function drawDirection(ctx: CanvasRenderingContext2D, t: number) {
		const left = t >= 0.08 && t < 0.39;
		const right = t >= 0.47 && t < 0.79;
		if (!left && !right) return;
		const y = 30;
		const startX = left ? DATA_X - 8 : GAUSSIAN_X + 8;
		const endX = left ? GAUSSIAN_X + 8 : DATA_X - 8;
		const pulse = 0.38 + 0.16 * Math.sin(t * Math.PI * 20);
		ctx.lineWidth = 1.5;
		ctx.strokeStyle = `rgba(69, 157, 255, ${pulse})`;
		ctx.beginPath();
		ctx.moveTo(startX, y);
		ctx.lineTo(endX, y);
		ctx.stroke();

		const arrowSign = left ? 1 : -1;
		ctx.beginPath();
		ctx.moveTo(endX + arrowSign * 8, y - 5);
		ctx.lineTo(endX, y);
		ctx.lineTo(endX + arrowSign * 8, y + 5);
		ctx.stroke();

		const travel = (t * 6.5) % 1;
		for (let trail = 0; trail < 3; trail += 1) {
			const position = (travel - trail * 0.09 + 1) % 1;
			const x = mix(startX, endX, position);
			ctx.fillStyle = `rgba(92, 174, 255, ${0.72 - trail * 0.18})`;
			ctx.fillRect(Math.round(x) - 4, y - 1, 8, 3);
		}
	}

	function drawBitmapText(ctx: CanvasRenderingContext2D, text: string, centerX: number, centerY: number, pixel: number) {
		const units = [...text].reduce((sum, char) => sum + (char === ' ' ? 4 : 6), 0) - 1;
		let cursorX = Math.round(centerX - (units * pixel) / 2);
		const top = Math.round(centerY - (7 * pixel) / 2);
		for (const char of text) {
			if (char === ' ') {
				cursorX += 4 * pixel;
				continue;
			}
			for (const [row, bits] of (PIXEL_FONT[char] ?? []).entries()) {
				for (let col = 0; col < bits.length; col += 1) {
					if (bits[col] === '1') ctx.fillRect(cursorX + col * pixel, top + row * pixel, pixel, pixel);
				}
			}
			cursorX += 6 * pixel;
		}
	}

	function drawLabels(ctx: CanvasRenderingContext2D, t: number, scale = 1) {
		const labelPixel = Math.round(scale * 1.25);
		ctx.fillStyle = 'rgba(69, 157, 255, 0.54)';
		drawBitmapText(ctx, 'GAUSSIAN', GAUSSIAN_X * scale, 218 * scale, labelPixel);
		drawBitmapText(ctx, 'DATA', DATA_X * scale, 218 * scale, labelPixel);
		ctx.fillStyle = 'rgba(69, 157, 255, 0.62)';
		drawBitmapText(ctx, stageLabel(t), 240 * scale, 244 * scale, labelPixel);
	}

	function render() {
		if (!canvas || !lowCanvas) return;
		const ctx = lowCanvas.getContext('2d');
		const out = canvas.getContext('2d');
		if (!ctx || !out) return;

		const t = progress;
		drawGrid(ctx, t);
		drawGuides(ctx, t);
		drawDataContours(ctx, t);
		drawDirection(ctx, t);

		const available = trajectories[0]?.length ?? 0;
		const visible = Math.min(DISPLAY_COUNT, available);
		const particlesMoving = (t >= 0.08 && t < 0.39) || (t >= 0.47 && t < 0.79);
		for (let j = 0; j < visible; j += 1) {
			const i = Math.floor((j * available) / visible);
			const point = particlePosition(i, t);
			const flicker = 0.78 + 0.22 * Math.sin(phases[i] * 4.1 + t * 95);

			if (particlesMoving) {
				for (let trail = 3; trail >= 1; trail -= 1) {
					const ghost = particlePosition(i, Math.max(0, t - trail * 0.006));
					ctx.fillStyle = neon(0.045 + (3 - trail) * 0.035);
					ctx.fillRect(Math.round(ghost.x) - 1, Math.round(ghost.y) - 1, 2, 2);
				}
			}

			ctx.fillStyle = neon(flicker);
			const size = (i + Math.floor(t * 90)) % 17 === 0 ? 3 : 2;
			ctx.fillRect(Math.round(point.x) - 1, Math.round(point.y) - 1, size, size);
		}

		out.imageSmoothingEnabled = false;
		out.clearRect(0, 0, EXPORT_W, EXPORT_H);
		out.drawImage(lowCanvas, 0, 0, EXPORT_W, EXPORT_H);
		drawLabels(out, t, EXPORT_W / VIEW_W);
		out.fillStyle = 'rgba(0, 6, 8, 0.22)';
		for (let y = 4; y < EXPORT_H; y += 12) out.fillRect(0, y, EXPORT_W, 4);
	}

	async function exportVideo() {
		if (!player || !canvas || exporting) return;
		exporting = true;
		const savedT = player.t;
		const wasPlaying = player.isPlaying;
		player.pause();
		try {
			const [video] = await streamingVideoExport(
				[canvas],
				FRAME_COUNT,
				FPS,
				'webm',
				(frame) => {
					const value = frame / (FRAME_COUNT - 1);
					player?.seek(value);
					progress = player?.state.progress ?? value;
					render();
				},
				{ bitrate: 10_000_000, backgroundColor: '#010405' }
			);
			downloadBlob(video, 'neon-diffusion-loop.webm');
		} finally {
			player.seek(savedT);
			progress = player.state.progress;
			render();
			if (wasPlaying) player.play();
			exporting = false;
		}
	}

	onMount(() => {
		initializeParticleMetadata();
		lowCanvas = document.createElement('canvas');
		lowCanvas.width = VIEW_W;
		lowCanvas.height = VIEW_H;

		player = new Player<State>(makeTimeline(), { looping: true, endPause: 0 });
		player.onTick((_t, state) => {
			progress = Number.isFinite(state.progress) ? state.progress : 0;
			render();
		});
		const animationWindow = window as Window & {
			__exportNeonDiffusion?: () => Promise<void>;
			__renderNeonFrame?: (value: number) => void;
		};
		animationWindow.__exportNeonDiffusion = exportVideo;
		animationWindow.__renderNeonFrame = (value: number) => {
			player?.pause();
			player?.seek(clamp(value));
			progress = player?.state.progress ?? clamp(value);
			render();
		};
		render();
		player.play();
		loadTrainedDiffusionSimulation().catch((error) => console.error(error));
	});

	onDestroy(() => {
		player?.dispose();
		if (typeof window !== 'undefined') {
			const animationWindow = window as Window & {
				__exportNeonDiffusion?: () => Promise<void>;
				__renderNeonFrame?: (value: number) => void;
			};
			delete animationWindow.__exportNeonDiffusion;
			delete animationWindow.__renderNeonFrame;
		}
	});
</script>

<div class="visualization-shell">
	<div class="screen">
		<canvas
			bind:this={canvas}
			width={EXPORT_W}
			height={EXPORT_H}
			aria-label="Pixel-art diffusion animation moving a smiley data manifold into Gaussian noise and back"
		></canvas>
		<div class="screen-glass" aria-hidden="true"></div>
	</div>
</div>

<style>
	.visualization-shell {
		display: grid;
		width: 100%;
		height: 100%;
		place-items: center;
	}

	.screen {
		position: relative;
		width: min(100vw, calc(100vh * 16 / 9));
		max-height: 100vh;
		overflow: hidden;
		background: #010405;
	}

	canvas {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		image-rendering: pixelated;
	}

	.screen-glass {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background:
			radial-gradient(circle at 50% 46%, transparent 52%, rgba(0, 0, 0, 0.28) 100%),
			linear-gradient(90deg, rgba(48, 112, 255, 0.018), transparent 22%, transparent 78%, rgba(48, 112, 255, 0.018));
		mix-blend-mode: screen;
	}
</style>
