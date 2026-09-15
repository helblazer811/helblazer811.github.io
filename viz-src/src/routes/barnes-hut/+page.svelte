<script lang="ts">
	import { onMount } from 'svelte';
	import PageHeader from '$lib/PageHeader.svelte';

	type Particle = { x: number; y: number; vx: number; vy: number; ax: number; ay: number; mass: number; central: boolean };
	const BODY_COUNT = 600;
	const G = 1.05;
	const SOFTENING_SQ = 0.00024;
	const DT = 0.0015;
	const MAX_DEPTH = 18;
	const LOOP_SECONDS = 60;
	const PARTICLES_PER_GALAXY = BODY_COUNT / 2;
	const BULGE_MASS = 0.68;
	const DISK_MASS = 1 - BULGE_MASS;
	const BULGE_SCALE = 0.12;
	const SPIRAL_PITCH = 20 * Math.PI / 180;

	let canvas: HTMLCanvasElement;
	let particles: Particle[] = [];
	let root: QuadNode | null = null;
	let animationFrame = 0;
	let loopElapsed = 0;
	const theta = 0.7;

	class QuadNode {
		mass = 0;
		cx = 0;
		cy = 0;
		bodies: Particle[] = [];
		children: QuadNode[] | null = null;
		x: number;
		y: number;
		size: number;
		depth: number;

		constructor(x: number, y: number, size: number, depth = 0) {
			this.x = x;
			this.y = y;
			this.size = size;
			this.depth = depth;
		}

		contains(px: number, py: number) {
			return px >= this.x && px < this.x + this.size && py >= this.y && py < this.y + this.size;
		}

		insert(body: Particle) {
			const nextMass = this.mass + body.mass;
			this.cx = (this.cx * this.mass + body.x * body.mass) / nextMass;
			this.cy = (this.cy * this.mass + body.y * body.mass) / nextMass;
			this.mass = nextMass;
			if (!this.children && (this.bodies.length === 0 || this.depth >= MAX_DEPTH)) {
				this.bodies.push(body);
				return;
			}
			if (!this.children) {
				const previous = this.bodies;
				this.bodies = [];
				this.subdivide();
				for (const item of previous) this.insertIntoChild(item);
			}
			this.insertIntoChild(body);
		}

		subdivide() {
			const half = this.size / 2;
			this.children = [
				new QuadNode(this.x, this.y, half, this.depth + 1),
				new QuadNode(this.x + half, this.y, half, this.depth + 1),
				new QuadNode(this.x, this.y + half, half, this.depth + 1),
				new QuadNode(this.x + half, this.y + half, half, this.depth + 1)
			];
		}

		insertIntoChild(body: Particle) {
			if (!this.children) return;
			const right = body.x >= this.x + this.size / 2 ? 1 : 0;
			const bottom = body.y >= this.y + this.size / 2 ? 1 : 0;
			this.children[right + bottom * 2].insert(body);
		}
	}

	function seededRandom(seed: number) {
		let state = seed >>> 0;
		return () => {
			state = (state * 1664525 + 1013904223) >>> 0;
			return state / 4294967296;
		};
	}

	function gaussian(random: () => number) {
		const u = Math.max(random(), 1e-9);
		return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * random());
	}

	function addGalaxy(list: Particle[], cx: number, cy: number, radius: number, bulkVx: number, bulkVy: number, random: () => number) {
		list.push({ x: cx, y: cy, vx: bulkVx, vy: bulkVy, ax: 0, ay: 0, mass: BULGE_MASS, central: true });
		const starMass = DISK_MASS / (PARTICLES_PER_GALAXY - 1);
		for (let i = 0; i < PARTICLES_PER_GALAXY - 1; i++) {
			const normalizedRadius = 0.055 + 0.945 * Math.pow(random(), 1.2);
			const r = radius * normalizedRadius;
			const inArm = random() < 0.84;
			const spiralAngle = Math.log(normalizedRadius / 0.055) / Math.tan(SPIRAL_PITCH);
			const angle = inArm
				? (i % 2) * Math.PI + spiralAngle + gaussian(random) * (0.07 + normalizedRadius * 0.11)
				: random() * Math.PI * 2;
			const jitter = gaussian(random) * (0.003 + normalizedRadius * 0.006);
			const x = cx + Math.cos(angle) * r + jitter;
			const y = cy + Math.sin(angle) * r * 0.76 + jitter * 0.7;
			const radialFraction = Math.pow((normalizedRadius - 0.055) / 0.945, 1 / 1.2);
			const bulgeAcceleration = BULGE_MASS * r / Math.pow(r * r + BULGE_SCALE * BULGE_SCALE, 1.5);
			const diskAcceleration = DISK_MASS * radialFraction / Math.max(r * r, 0.0016);
			const speed = Math.sqrt(G * r * (bulgeAcceleration + diskAcceleration));
			list.push({
				x, y,
				vx: bulkVx - Math.sin(angle) * speed + gaussian(random) * 0.009,
				vy: bulkVy + Math.cos(angle) * speed * 0.76 + gaussian(random) * 0.009,
				ax: 0, ay: 0, mass: starMass, central: false
			});
		}
	}

	function resetSimulation() {
		const random = seededRandom(811);
		const next: Particle[] = [];
		// Equal masses at opposite sides of their barycenter. These bulk velocities
		// are tangential and close to the circular-orbit speed for their separation.
		addGalaxy(next, -0.56, 0, 0.34, 0, -0.685, random);
		addGalaxy(next, 0.56, 0, 0.34, 0, 0.685, random);
		particles = next;
		root = buildTree(particles);
		loopElapsed = 0;
	}

	function buildTree(items: Particle[]) {
		let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
		for (const p of items) {
			minX = Math.min(minX, p.x); minY = Math.min(minY, p.y);
			maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y);
		}
		const size = Math.max(maxX - minX, maxY - minY, 0.1) * 1.08;
		const node = new QuadNode((minX + maxX - size) / 2, (minY + maxY - size) / 2, size);
		for (const p of items) node.insert(p);
		return node;
	}

	function applyMass(body: Particle, x: number, y: number, mass: number) {
		const dx = x - body.x, dy = y - body.y;
		const distanceSq = dx * dx + dy * dy + SOFTENING_SQ;
		const inverseDistance = 1 / Math.sqrt(distanceSq);
		const scale = G * mass * inverseDistance * inverseDistance * inverseDistance;
		body.ax += dx * scale;
		body.ay += dy * scale;
	}

	function accumulateForce(body: Particle, node: QuadNode) {
		if (node.mass === 0) return;
		if (!node.children) {
			for (const other of node.bodies) if (other !== body) applyMass(body, other.x, other.y, other.mass);
			return;
		}
		const dx = node.cx - body.x, dy = node.cy - body.y;
		const distance = Math.sqrt(dx * dx + dy * dy + SOFTENING_SQ);
		if (!node.contains(body.x, body.y) && node.size / distance < theta) {
			applyMass(body, node.cx, node.cy, node.mass);
			return;
		}
		for (const child of node.children) accumulateForce(body, child);
	}

	function step() {
		root = buildTree(particles);
		for (const p of particles) {
			p.ax = 0; p.ay = 0;
			accumulateForce(p, root);
		}
		const dt = DT;
		for (const p of particles) {
			p.vx += p.ax * dt; p.vy += p.ay * dt;
			p.x += p.vx * dt; p.y += p.vy * dt;
		}
	}

	function draw(ctx: CanvasRenderingContext2D, width: number, height: number, dpr: number) {
		ctx.clearRect(0, 0, width, height);
		const gradient = ctx.createRadialGradient(width * 0.5, height * 0.48, 0, width * 0.5, height * 0.48, width * 0.7);
		gradient.addColorStop(0, '#ffffff'); gradient.addColorStop(0.68, '#fbfcfe'); gradient.addColorStop(1, '#f4f7fa');
		ctx.fillStyle = gradient; ctx.fillRect(0, 0, width, height);
		const scale = Math.min(width / 3.05, height / 2.1);
		const worldToScreen = (x: number, y: number) => [width / 2 + x * scale, height / 2 + y * scale] as const;
		const fadeIn = Math.min(1, loopElapsed / 0.7);
		const fadeOut = Math.min(1, (LOOP_SECONDS - loopElapsed) / 0.9);
		ctx.globalAlpha = Math.max(0, Math.min(fadeIn, fadeOut));
		if (root) {
			ctx.lineWidth = 1;
			const drawNode = (node: QuadNode) => {
				if (node.mass === 0) return;
				const [x, y] = worldToScreen(node.x, node.y);
				ctx.strokeStyle = `rgba(23, 114, 208, ${Math.max(0.08, 0.38 - node.depth * 0.025)})`;
				ctx.strokeRect(x, y, node.size * scale, node.size * scale);
				if (node.children) for (const child of node.children) drawNode(child);
			};
			drawNode(root);
		}
		for (const p of particles) {
			const [x, y] = worldToScreen(p.x, p.y);
			const radius = (p.central ? 2.8 : 1.35 + Math.min(Math.hypot(p.vx, p.vy), 2) * 0.18) * dpr;
			ctx.fillStyle = 'rgba(45, 49, 54, 0.88)';
			ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
		}
		ctx.globalAlpha = 1;
	}

	onMount(() => {
		resetSimulation();
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		let previous = performance.now();
		let integrationAccumulator = 0;
		const frame = (now: number) => {
			const rect = canvas.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const width = Math.max(1, Math.round(rect.width * dpr));
			const height = Math.max(1, Math.round(rect.height * dpr));
			if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
			const delta = Math.min(now - previous, 32); previous = now;
			loopElapsed += delta / 1000;
			if (loopElapsed >= LOOP_SECONDS) resetSimulation();
			integrationAccumulator += delta;
			const integrationSteps = Math.min(2, Math.floor(integrationAccumulator / 16.67));
			for (let i = 0; i < integrationSteps; i++) step();
			integrationAccumulator -= integrationSteps * 16.67;
			draw(ctx, width, height, dpr);
			animationFrame = requestAnimationFrame(frame);
		};
		animationFrame = requestAnimationFrame(frame);
		return () => cancelAnimationFrame(animationFrame);
	});
</script>

<svelte:head>
	<title>Barnes–Hut Galaxy Collision — Alec Helbling</title>
	<meta name="description" content="An interactive Barnes–Hut N-body simulation with two colliding galaxies and a live quadtree overlay." />
</svelte:head>

<PageHeader title="Barnes–Hut Galaxy Collision" author="Alec Helbling" authorLink="https://alechelbling.com" date="September 15, 2026" />

<section class="simulation-shell" aria-label="Interactive Barnes–Hut galaxy simulation">
	<canvas bind:this={canvas} aria-label="Two galaxies interacting under approximate N-body gravity with a live quadtree"></canvas>
</section>

<style>
	:global(:root) { --page-max-width: 920px; }
	.simulation-shell { margin: 1.25rem 0 0; background: #fff; }
	canvas { display: block; width: 100%; height: auto; aspect-ratio: 3 / 2; touch-action: none; }
</style>
