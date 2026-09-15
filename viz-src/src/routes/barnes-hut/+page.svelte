<script lang="ts">
	import { onMount } from 'svelte';
	import PageHeader from '$lib/PageHeader.svelte';

	type Particle = { x: number; y: number; vx: number; vy: number; ax: number; ay: number; mass: number; central: boolean; softeningSq: number; galaxy: number };
	type FlatNode = { cx: number; cy: number; mass: number; bodyIndex: number; x: number; y: number; size: number; softeningSq: number; children: number[] };
	const BODY_COUNT = 4000;
	const G = 1.05;
	const SOFTENING_SQ = 0.00018;
	const DT = 0.00135;
	const MAX_DEPTH = 18;
	const LOOP_SECONDS = 60;
	const PARTICLES_PER_GALAXY = BODY_COUNT / 2;
	const BULGE_MASS = 1;
	const DISK_MASS = 0.035;
	const BULGE_SCALE = 0.16;
	const SPIRAL_PITCH = 21 * Math.PI / 180;
	const PATTERN_SPEED = 4.1;
	const ARM_STRENGTH = 0.026;
	const GALAXY_PHASES = [0.18, 1.42];

	let canvas: HTMLCanvasElement;
	let particles: Particle[] = [];
	let root: QuadNode | null = null;
	let gpuSimulation: GpuSimulation | null = null;
	let gpuBusy = false;
	let animationFrame = 0;
	let loopElapsed = 0;
	let patternAngle = 0;
	const theta = 0.6;

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

	function addGalaxy(list: Particle[], galaxy: number, cx: number, cy: number, radius: number, bulkVx: number, bulkVy: number, phase: number, random: () => number) {
		list.push({ x: cx, y: cy, vx: bulkVx, vy: bulkVy, ax: 0, ay: 0, mass: BULGE_MASS, central: true, softeningSq: BULGE_SCALE * BULGE_SCALE, galaxy });
		const starMass = DISK_MASS / (PARTICLES_PER_GALAXY - 1);
		const diskScale = radius * 0.34;
		const minimumRadius = radius * 0.075;
		for (let i = 0; i < PARTICLES_PER_GALAXY - 1; i++) {
			let r = 0;
			do {
				r = -diskScale * Math.log(Math.max(random() * random(), 1e-9));
			} while (r < minimumRadius || r > radius);
			const normalizedRadius = r / radius;
			const inArm = random() < 0.7;
			const spiralAngle = Math.log(normalizedRadius / 0.075) / Math.tan(SPIRAL_PITCH);
			const angle = inArm
				? phase + (i % 2) * Math.PI + spiralAngle + gaussian(random) * (0.035 + normalizedRadius * 0.055)
				: random() * Math.PI * 2;
			const jitter = gaussian(random) * (0.0015 + normalizedRadius * 0.003);
			const x = cx + Math.cos(angle) * r + jitter;
			const y = cy + Math.sin(angle) * r + jitter;
			const bulgeAcceleration = BULGE_MASS * r / Math.pow(r * r + BULGE_SCALE * BULGE_SCALE, 1.5);
			const speed = Math.sqrt(G * r * bulgeAcceleration);
			list.push({
				x, y,
				vx: bulkVx - Math.sin(angle) * speed + gaussian(random) * 0.004,
				vy: bulkVy + Math.cos(angle) * speed + gaussian(random) * 0.004,
				ax: 0, ay: 0, mass: starMass, central: false, softeningSq: SOFTENING_SQ, galaxy
			});
		}
	}

	function resetSimulation() {
		const random = seededRandom(811);
		const next: Particle[] = [];
		// Equal masses at opposite sides of their barycenter. These bulk velocities
		// are tangential and close to the circular-orbit speed for their separation.
		addGalaxy(next, 0, -0.64, 0, 0.4, 0, -0.64, GALAXY_PHASES[0], random);
		addGalaxy(next, 1, 0.64, 0, 0.4, 0, 0.64, GALAXY_PHASES[1], random);
		particles = next;
		root = buildTree(particles);
		loopElapsed = 0;
		patternAngle = 0;
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

	function flattenTree(tree: QuadNode) {
		const bodyIndices = new Map(particles.map((particle, index) => [particle, index]));
		const nodes: FlatNode[] = [];
		const visit = (node: QuadNode): number => {
			const index = nodes.length;
			const onlyBody = !node.children && node.bodies.length === 1 ? node.bodies[0] : null;
			nodes.push({
				cx: node.cx, cy: node.cy, mass: node.mass,
				bodyIndex: onlyBody ? (bodyIndices.get(onlyBody) ?? -1) : -2,
				x: node.x, y: node.y, size: node.size,
				softeningSq: onlyBody?.softeningSq ?? SOFTENING_SQ,
				children: [-1, -1, -1, -1]
			});
			if (node.children) nodes[index].children = node.children.map(visit);
			return index;
		};
		visit(tree);
		return nodes;
	}

	class GpuSimulation {
		device: any;
		pipeline: any;

		constructor(device: any, pipeline: any) {
			this.device = device;
			this.pipeline = pipeline;
		}

		static async create() {
			const gpu = (navigator as any).gpu;
			if (!gpu) return null;
			const adapter = await gpu.requestAdapter({ powerPreference: 'high-performance' });
			if (!adapter) return null;
			const device = await adapter.requestDevice();
			const module = device.createShaderModule({ code: GPU_SHADER });
			const pipeline = await device.createComputePipelineAsync({ layout: 'auto', compute: { module, entryPoint: 'main' } });
			return new GpuSimulation(device, pipeline);
		}

		async step(items: Particle[], nodes: FlatNode[]) {
			const usage = (globalThis as any).GPUBufferUsage;
			const mapMode = (globalThis as any).GPUMapMode;
			const particleFloats = new Float32Array(items.length * 12);
			for (let i = 0; i < items.length; i++) {
				const p = items[i], offset = i * 12;
				particleFloats.set([p.x, p.y, p.vx, p.vy, p.ax, p.ay, p.mass, p.softeningSq, p.galaxy, p.central ? 1 : 0, 0, 0], offset);
			}
			const nodeBytes = new ArrayBuffer(nodes.length * 48);
			const nodeFloats = new Float32Array(nodeBytes);
			const nodeInts = new Int32Array(nodeBytes);
			for (let i = 0; i < nodes.length; i++) {
				const n = nodes[i], offset = i * 12;
				nodeFloats.set([n.cx, n.cy, n.mass, n.bodyIndex, n.x, n.y, n.size, n.softeningSq], offset);
				nodeInts.set(n.children, offset + 8);
			}
			const particleBuffer = this.device.createBuffer({ size: particleFloats.byteLength, usage: usage.STORAGE | usage.COPY_SRC, mappedAtCreation: true });
			new Float32Array(particleBuffer.getMappedRange()).set(particleFloats); particleBuffer.unmap();
			const nodeBuffer = this.device.createBuffer({ size: nodeBytes.byteLength, usage: usage.STORAGE, mappedAtCreation: true });
			new Uint8Array(nodeBuffer.getMappedRange()).set(new Uint8Array(nodeBytes)); nodeBuffer.unmap();
			const params = new Float32Array([
				items.length, nodes.length, theta, G,
				DT, patternAngle, SPIRAL_PITCH, ARM_STRENGTH,
				items[0].x, items[0].y, GALAXY_PHASES[0], 0,
				items[PARTICLES_PER_GALAXY].x, items[PARTICLES_PER_GALAXY].y, GALAXY_PHASES[1], 0,
				SOFTENING_SQ, 0, 0, 0
			]);
			const paramsBuffer = this.device.createBuffer({ size: params.byteLength, usage: usage.UNIFORM | usage.COPY_DST });
			this.device.queue.writeBuffer(paramsBuffer, 0, params);
			const readBuffer = this.device.createBuffer({ size: particleFloats.byteLength, usage: usage.COPY_DST | usage.MAP_READ });
			const bindGroup = this.device.createBindGroup({
				layout: this.pipeline.getBindGroupLayout(0),
				entries: [
					{ binding: 0, resource: { buffer: particleBuffer } },
					{ binding: 1, resource: { buffer: nodeBuffer } },
					{ binding: 2, resource: { buffer: paramsBuffer } }
				]
			});
			const encoder = this.device.createCommandEncoder();
			const pass = encoder.beginComputePass();
			pass.setPipeline(this.pipeline); pass.setBindGroup(0, bindGroup);
			pass.dispatchWorkgroups(Math.ceil(items.length / 64)); pass.end();
			encoder.copyBufferToBuffer(particleBuffer, 0, readBuffer, 0, particleFloats.byteLength);
			this.device.queue.submit([encoder.finish()]);
			await readBuffer.mapAsync(mapMode.READ);
			const result = new Float32Array(readBuffer.getMappedRange());
			for (let i = 0; i < items.length; i++) {
				const offset = i * 12;
				items[i].x = result[offset]; items[i].y = result[offset + 1];
				items[i].vx = result[offset + 2]; items[i].vy = result[offset + 3];
			}
			readBuffer.unmap();
			particleBuffer.destroy(); nodeBuffer.destroy(); paramsBuffer.destroy(); readBuffer.destroy();
		}
	}

	const GPU_SHADER = /* wgsl */`
		struct Particle { posVel: vec4<f32>, accelMass: vec4<f32>, meta: vec4<f32> };
		struct Node { com: vec4<f32>, bounds: vec4<f32>, children: vec4<i32> };
		struct Params { counts: vec4<f32>, timing: vec4<f32>, core0: vec4<f32>, core1: vec4<f32>, soft: vec4<f32> };
		@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
		@group(0) @binding(1) var<storage, read> nodes: array<Node>;
		@group(0) @binding(2) var<uniform> params: Params;

		@compute @workgroup_size(64)
		fn main(@builtin(global_invocation_id) id: vec3<u32>) {
			let index = id.x;
			if (index >= u32(params.counts.x)) { return; }
			var particle = particles[index];
			var acceleration = vec2<f32>(0.0);
			var stack: array<i32, 96>;
			var top = 1;
			stack[0] = 0;
			loop {
				if (top == 0) { break; }
				top -= 1;
				let nodeIndex = stack[top];
				let node = nodes[nodeIndex];
				if (node.com.z <= 0.0) { continue; }
				let delta = node.com.xy - particle.posVel.xy;
				let distanceSquared = dot(delta, delta);
				let isLeaf = node.children.x < 0;
				if (isLeaf && i32(round(node.com.w)) == i32(index)) { continue; }
				let inside = particle.posVel.x >= node.bounds.x && particle.posVel.x < node.bounds.x + node.bounds.z && particle.posVel.y >= node.bounds.y && particle.posVel.y < node.bounds.y + node.bounds.z;
				let distance = sqrt(distanceSquared + params.soft.x);
				if (isLeaf || (!inside && node.bounds.z / distance < params.counts.z)) {
					let softening = select(params.soft.x, node.bounds.w, isLeaf);
					let inverseDistance = inverseSqrt(distanceSquared + softening);
					acceleration += delta * (params.counts.w * node.com.z * inverseDistance * inverseDistance * inverseDistance);
				} else {
					for (var child = 0; child < 4; child += 1) {
						let childIndex = node.children[child];
						if (childIndex >= 0 && top < 96) { stack[top] = childIndex; top += 1; }
					}
				}
			}
			if (particle.meta.y < 0.5) {
				let core = select(params.core0, params.core1, particle.meta.x > 0.5);
				let relative = particle.posVel.xy - core.xy;
				let radius = max(length(relative), 0.02);
				let angle = atan2(relative.y, relative.x);
				let phase = 2.0 * (angle - core.z - params.timing.y - log(radius / 0.03) / tan(params.timing.z));
				let envelope = min(1.0, radius / 0.08) * exp(-pow(radius / 0.52, 4.0));
				let tangential = -params.timing.w * envelope * sin(phase);
				acceleration += vec2<f32>(-relative.y, relative.x) / radius * tangential;
			}
			particle.posVel.zw += acceleration * params.timing.x;
			particle.posVel.xy += particle.posVel.zw * params.timing.x;
			particle.accelMass.xy = acceleration;
			particles[index] = particle;
		}
	`;

	function applyMass(body: Particle, x: number, y: number, mass: number, softeningSq = SOFTENING_SQ) {
		const dx = x - body.x, dy = y - body.y;
		const distanceSq = dx * dx + dy * dy + softeningSq;
		const inverseDistance = 1 / Math.sqrt(distanceSq);
		const scale = G * mass * inverseDistance * inverseDistance * inverseDistance;
		body.ax += dx * scale;
		body.ay += dy * scale;
	}

	function accumulateForce(body: Particle, node: QuadNode) {
		if (node.mass === 0) return;
		if (!node.children) {
			for (const other of node.bodies) if (other !== body) applyMass(body, other.x, other.y, other.mass, other.softeningSq);
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

	function calculateAccelerations(tree: QuadNode) {
		const cores = [particles[0], particles[PARTICLES_PER_GALAXY]];
		for (const p of particles) {
			p.ax = 0; p.ay = 0;
			accumulateForce(p, tree);
			if (!p.central) applySpiralForce(p, cores[p.galaxy]);
		}
	}

	function applySpiralForce(p: Particle, core: Particle) {
		const dx = p.x - core.x, dy = p.y - core.y;
		const radius = Math.max(Math.hypot(dx, dy), 0.02);
		const angle = Math.atan2(dy, dx);
		const phase = 2 * (angle - GALAXY_PHASES[p.galaxy] - patternAngle - Math.log(radius / 0.03) / Math.tan(SPIRAL_PITCH));
		const envelope = Math.min(1, radius / 0.08) * Math.exp(-Math.pow(radius / 0.52, 4));
		const tangential = -ARM_STRENGTH * envelope * Math.sin(phase);
		p.ax += -dy / radius * tangential;
		p.ay += dx / radius * tangential;
	}

	function stepCpu() {
		patternAngle += PATTERN_SPEED * DT;
		root = buildTree(particles);
		calculateAccelerations(root);
		for (const p of particles) {
			p.vx += p.ax * DT; p.vy += p.ay * DT;
			p.x += p.vx * DT; p.y += p.vy * DT;
		}
	}

	function cameraComposition() {
		const cycle = loopElapsed % 8;
		const smooth = (value: number) => {
			const t = Math.max(0, Math.min(1, value));
			return t * t * (3 - 2 * t);
		};
		let detail = 0;
		if (cycle >= 0.8 && cycle < 1.6) detail = smooth((cycle - 0.8) / 0.8);
		else if (cycle >= 1.6 && cycle < 3.4) detail = 1;
		else if (cycle >= 3.4 && cycle < 4.4) detail = 1 - smooth((cycle - 3.4) / 1);
		const galaxy = Math.floor(loopElapsed / 8) % 2;
		return { detail, galaxy, timeScale: 1 - detail * 0.72 };
	}

	function draw(ctx: CanvasRenderingContext2D, width: number, height: number, dpr: number) {
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, width, height);
		const composition = cameraComposition();
		const focus = particles[composition.galaxy * PARTICLES_PER_GALAXY];
		const scale = Math.min(width / 3.05, height / 2.1) * (1 + composition.detail * 1.45);
		const focusX = (focus?.x ?? 0) * composition.detail;
		const focusY = (focus?.y ?? 0) * composition.detail;
		const worldToScreen = (x: number, y: number) => [width / 2 + (x - focusX) * scale, height / 2 + (y - focusY) * scale] as const;
		const fadeIn = Math.min(1, loopElapsed / 0.7);
		const fadeOut = Math.min(1, (LOOP_SECONDS - loopElapsed) / 0.9);
		ctx.globalAlpha = Math.max(0, Math.min(fadeIn, fadeOut));
		if (root) {
			ctx.lineWidth = 0.65 * dpr;
			const drawNode = (node: QuadNode) => {
				if (node.mass === 0 || node.depth > 10) return;
				const [x, y] = worldToScreen(node.x, node.y);
				const opacity = Math.max(0.025, 0.18 - node.depth * 0.014) * (1 + composition.detail * 0.55);
				ctx.strokeStyle = `rgba(23, 114, 208, ${opacity})`;
				ctx.strokeRect(x, y, node.size * scale, node.size * scale);
				if (node.children) for (const child of node.children) drawNode(child);
			};
			drawNode(root);
		}
		for (const p of particles) {
			const [x, y] = worldToScreen(p.x, p.y);
			const radius = (p.central ? 2.4 : 0.72 + Math.min(Math.hypot(p.vx, p.vy), 2) * 0.06) * dpr;
			ctx.fillStyle = 'rgba(45, 49, 54, 0.9)';
			ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
		}
		ctx.globalAlpha = 1;
	}

	onMount(() => {
		resetSimulation();
		GpuSimulation.create().then((simulation) => { gpuSimulation = simulation; }).catch(() => { gpuSimulation = null; });
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
			integrationAccumulator += delta * cameraComposition().timeScale;
			const integrationSteps = Math.min(2, Math.floor(integrationAccumulator / 16.67));
			if (integrationSteps > 0) {
				if (gpuSimulation && !gpuBusy && root) {
					patternAngle += PATTERN_SPEED * DT;
					root = buildTree(particles);
					gpuBusy = true;
					gpuSimulation.step(particles, flattenTree(root)).catch(() => { gpuSimulation = null; }).finally(() => { gpuBusy = false; });
				} else if (!gpuSimulation) {
					for (let i = 0; i < integrationSteps; i++) stepCpu();
				}
				integrationAccumulator -= integrationSteps * 16.67;
			}
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
	:global(html), :global(body) { background: #fff; }
	.simulation-shell { margin: 1.25rem 0 0; background: #fff; }
	canvas { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; background: #fff; touch-action: none; }
</style>
