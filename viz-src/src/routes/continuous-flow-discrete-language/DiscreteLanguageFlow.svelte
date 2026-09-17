<script lang="ts">
	import { onMount } from 'svelte';
	import { drawTrajectories } from '@helblazer811/tempus-ui';

	type Point = {
		sx: number;
		sy: number;
		tx: number;
		ty: number;
		cx1: number;
		cy1: number;
		cx2: number;
		cy2: number;
		mode: number;
		delay: number;
	};

	const WIDTH = 1920;
	const HEIGHT = 1080;
	const DURATION = 9000;
	const PATH_STEPS = 300;
	const SOURCE = { x: 390, y: 610 };
	const SIMPLEX_WIDTH = 440;
	const SIMPLEX_BASE_Y = 800;
	const SIMPLEX_HEIGHT = SIMPLEX_WIDTH * Math.sqrt(3) / 2;
	const MODES = [
		{ x: 1370, y: SIMPLEX_BASE_Y - SIMPLEX_HEIGHT, labelX: 1370, labelY: 300, word: 'dog', oneHot: '[1, 0, 0]', color: '#e0714f' },
		{ x: 1370 - SIMPLEX_WIDTH / 2, y: SIMPLEX_BASE_Y, labelX: 1025, labelY: 930, word: 'cat', oneHot: '[0, 1, 0]', color: '#697dd1' },
		{ x: 1370 + SIMPLEX_WIDTH / 2, y: SIMPLEX_BASE_Y, labelX: 1715, labelY: 930, word: 'bird', oneHot: '[0, 0, 1]', color: '#49a886' }
	];

	let canvas: HTMLCanvasElement;
	let pathCanvas: HTMLCanvasElement;
	let foregroundCanvas: HTMLCanvasElement;
	let animationFrame = 0;
	let startedAt = 0;
	let manualCycle: number | null = null;
	let points: Point[] = [];
	let gpuPaths: number[][][][] = [[], [], []];
	let sourceCloud: { x: number; y: number; r: number; a: number }[] = [];
	let targetCloud: { x: number; y: number; r: number; a: number; mode: number }[] = [];

	function seededRandom(seed: number) {
		let state = seed >>> 0;
		return () => {
			state = (state * 1664525 + 1013904223) >>> 0;
			return state / 4294967296;
		};
	}

	function gaussian(random: () => number) {
		const u = Math.max(random(), 1e-9);
		const v = random();
		return Math.sqrt(-2 * Math.log(u)) * Math.cos(Math.PI * 2 * v);
	}

	function createScene() {
		const random = seededRandom(811);
		sourceCloud = Array.from({ length: 190 }, () => ({
			x: SOURCE.x + gaussian(random) * 81,
			y: SOURCE.y + gaussian(random) * 113,
			r: 5.25 + random() * 4.5,
			a: 0.3 + random() * 0.24
		}));

		targetCloud = MODES.flatMap((mode, modeIndex) =>
			Array.from({ length: 62 }, () => ({
				x: mode.x + gaussian(random) * 41,
				y: mode.y + gaussian(random) * 41,
				r: 4.5 + random() * 3.75,
				a: 0.28 + random() * 0.22,
				mode: modeIndex
			}))
		);

		points = Array.from({ length: 96 }, (_, index) => {
			const mode = index % 3;
			const target = MODES[mode];
			const sx = SOURCE.x + gaussian(random) * 80;
			const sy = SOURCE.y + gaussian(random) * 110;
			const tx = target.x + gaussian(random) * 34;
			const ty = target.y + gaussian(random) * 34;
			const bend = mode === 0 ? -170 : mode === 1 ? 115 : 145;
			return {
				sx,
				sy,
				tx,
				ty,
				cx1: 680 + random() * 120,
				cy1: sy + bend * (0.45 + random() * 0.55) + gaussian(random) * 20,
				cx2: 1000 + random() * 170,
				cy2: ty - bend * (0.22 + random() * 0.32) + gaussian(random) * 24,
				mode,
				delay: (index % 12) * 0.008
			};
		});

		gpuPaths = MODES.map((_, modeIndex) =>
			points
				.filter((point) => point.mode === modeIndex)
				.map((point) =>
					Array.from({ length: PATH_STEPS + 1 }, (_, step) => cubic(point, ease(step / PATH_STEPS)))
						.map(({ x, y }) => [x, y])
				)
		);
	}

	function ease(t: number) {
		return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
	}

	function cubic(point: Point, t: number) {
		const m = 1 - t;
		return {
			x: m * m * m * point.sx + 3 * m * m * t * point.cx1 + 3 * m * t * t * point.cx2 + t * t * t * point.tx,
			y: m * m * m * point.sy + 3 * m * m * t * point.cy1 + 3 * m * t * t * point.cy2 + t * t * t * point.ty
		};
	}

	function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
		ctx.beginPath();
		ctx.roundRect(x, y, w, h, r);
	}

	function drawLabel(ctx: CanvasRenderingContext2D, mode: (typeof MODES)[number]) {
		const w = 204;
		const h = 98;
		const x = mode.labelX - w / 2;
		const y = mode.labelY - h / 2;
		ctx.save();
		ctx.shadowColor = 'rgba(28, 34, 48, 0.10)';
		ctx.shadowBlur = 20;
		ctx.shadowOffsetY = 7;
		roundedRect(ctx, x, y, w, h, 18);
		ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
		ctx.fill();
		ctx.shadowColor = 'transparent';
		ctx.lineWidth = 2;
		ctx.strokeStyle = mode.color;
		ctx.stroke();
		ctx.fillStyle = '#1f2530';
		ctx.font = '600 35px Lato, Inter, system-ui, sans-serif';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(mode.word, mode.labelX, mode.labelY - 15);
		ctx.fillStyle = '#747b88';
		ctx.font = '400 23px ui-monospace, SFMono-Regular, Menlo, monospace';
		ctx.fillText(mode.oneHot, mode.labelX, mode.labelY + 27);
		ctx.restore();
	}

	function drawCloud(ctx: CanvasRenderingContext2D, progress: number) {
		for (const dot of sourceCloud) {
			ctx.globalAlpha = dot.a * (0.96 - progress * 0.2);
			ctx.fillStyle = '#7387d8';
			ctx.beginPath();
			ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
			ctx.fill();
		}
		for (const dot of targetCloud) {
			ctx.globalAlpha = dot.a * (0.76 + progress * 0.24);
			ctx.fillStyle = MODES[dot.mode].color;
			ctx.beginPath();
			ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.globalAlpha = 1;
	}

	function drawGlow(ctx: CanvasRenderingContext2D, point: Point, progress: number) {
		if (progress <= 0) return;
		const position = cubic(point, ease(progress));
		ctx.globalAlpha = 0.18;
		ctx.fillStyle = MODES[point.mode].color;
		ctx.beginPath();
		ctx.arc(position.x, position.y, 15, 0, Math.PI * 2);
		ctx.fill();
		ctx.globalAlpha = 1;
	}

	function drawGPUPaths(progress: number) {
		if (progress <= 0) {
			void drawTrajectories(pathCanvas, [], 0, {
				strokeWidth: 4.4,
				color: MODES[0].color,
				opacity: 0.78,
				pointRadius: 6.5
			});
			return;
		}

		const segmentIndex = Math.min(PATH_STEPS - 1, Math.floor(progress * PATH_STEPS));
		for (let modeIndex = 0; modeIndex < MODES.length; modeIndex += 1) {
			void drawTrajectories(
				pathCanvas,
				gpuPaths[modeIndex],
				segmentIndex,
				{
					strokeWidth: 4.4,
					color: MODES[modeIndex].color,
					opacity: 0.78,
					pointRadius: 6.5,
					showHeadMarker: true,
					headStyle: {
						type: 'circle',
						radius: 6.5,
						color: MODES[modeIndex].color,
						opacity: 0.96
					},
					opacityGradient: {
						mode: 'recency',
						timeWindow: 0.16
					}
				},
				{ clearCanvas: modeIndex === 0 }
			);
		}
	}

	function draw(timestamp: number) {
		const ctx = canvas.getContext('2d');
		const foregroundCtx = foregroundCanvas.getContext('2d');
		if (!ctx || !foregroundCtx) return;
		if (!startedAt && manualCycle === null) startedAt = timestamp;
		const cycle = manualCycle ?? ((timestamp - startedAt) % DURATION) / DURATION;
		const progress = cycle < 0.1 ? 0 : cycle > 0.84 ? 1 : (cycle - 0.1) / 0.74;

		ctx.clearRect(0, 0, WIDTH, HEIGHT);
		foregroundCtx.clearRect(0, 0, WIDTH, HEIGHT);
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, WIDTH, HEIGHT);

		ctx.fillStyle = '#242a35';
		ctx.font = '600 81px Lato, Inter, system-ui, sans-serif';
		ctx.textAlign = 'center';
		ctx.fillText('Modeling Language with Continuous Flows', WIDTH / 2, 142);

		ctx.save();
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'rgba(72, 79, 92, 0.23)';
		ctx.beginPath();
		ctx.moveTo(MODES[0].x, MODES[0].y);
		ctx.lineTo(MODES[1].x, MODES[1].y);
		ctx.lineTo(MODES[2].x, MODES[2].y);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = 'rgba(105, 125, 209, 0.075)';
		ctx.fill();
		ctx.restore();

		drawCloud(ctx, progress);
		for (const point of points) drawGlow(ctx, point, progress);
		drawGPUPaths(progress);
		for (const mode of MODES) drawLabel(foregroundCtx, mode);

		foregroundCtx.fillStyle = '#3a404c';
		foregroundCtx.font = '600 54px Lato, Inter, system-ui, sans-serif';
		foregroundCtx.textAlign = 'center';
		foregroundCtx.fillText('Gaussian Prior', SOURCE.x, 350);

		foregroundCtx.fillStyle = '#777f8d';
		foregroundCtx.font = '600 40px Lato, Inter, system-ui, sans-serif';
		foregroundCtx.textAlign = 'center';
		foregroundCtx.fillText('Simplex', 1370, SIMPLEX_BASE_Y - SIMPLEX_HEIGHT / 3);
		if (manualCycle === null) animationFrame = requestAnimationFrame(draw);
	}

	function restart() {
		manualCycle = null;
		cancelAnimationFrame(animationFrame);
		startedAt = performance.now();
		animationFrame = requestAnimationFrame(draw);
	}

	function seek(cycle: number) {
		manualCycle = Math.max(0, Math.min(1, cycle));
		cancelAnimationFrame(animationFrame);
		draw(0);
	}

	onMount(() => {
		let disposed = false;
		const captureWindow = window as unknown as {
			__restartDiscreteLanguageFlow?: () => void;
			__seekDiscreteLanguageFlow?: (cycle: number) => void;
		};

		async function initialize() {
			createScene();
			const ctx = canvas.getContext('2d');
			const foregroundCtx = foregroundCanvas.getContext('2d');
			if (ctx) ctx.imageSmoothingEnabled = true;
			if (foregroundCtx) foregroundCtx.imageSmoothingEnabled = true;
			await drawTrajectories(pathCanvas, [], 0, {
				strokeWidth: 4.4,
				color: MODES[0].color,
				opacity: 0.78,
				pointRadius: 6.5
			});
			if (!disposed) {
				captureWindow.__restartDiscreteLanguageFlow = restart;
				captureWindow.__seekDiscreteLanguageFlow = seek;
				animationFrame = requestAnimationFrame(draw);
			}
		}

		void initialize();
		return () => {
			disposed = true;
			cancelAnimationFrame(animationFrame);
			delete captureWindow.__restartDiscreteLanguageFlow;
			delete captureWindow.__seekDiscreteLanguageFlow;
		};
	});
</script>

<div class="discrete-flow-stage" aria-label="Particles flowing from a Gaussian distribution into three word embeddings">
	<canvas class="background-layer" bind:this={canvas} width={WIDTH} height={HEIGHT}></canvas>
	<canvas class="path-layer" bind:this={pathCanvas} width={WIDTH} height={HEIGHT}></canvas>
	<canvas class="foreground-layer" bind:this={foregroundCanvas} width={WIDTH} height={HEIGHT}></canvas>
</div>

<style>
	.discrete-flow-stage {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		background: #ffffff;
		overflow: hidden;
	}

	canvas {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
	}

	.background-layer { z-index: 0; }
	.path-layer { z-index: 1; }
	.foreground-layer { z-index: 2; pointer-events: none; }
</style>
