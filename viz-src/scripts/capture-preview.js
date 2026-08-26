// Records a short animated GIF of a visualization page's figure, for use as
// its `previewUrl` banner thumbnail on the portfolio site's homepage/blog.html.
//
// Usage:
//   node scripts/capture-preview.js <route-slug> [options]
//
// Options (all optional):
//   --selector=<css>   Element to capture. Default ".figure-content" — the
//                       div FigureBlock.svelte wraps the figure in, as a
//                       sibling of <figcaption>, so this naturally excludes
//                       the caption without any special-casing per page.
//   --duration=<ms>     How long to record. Default 6000.
//   --fps=<n>            Capture rate. Default 10.
//   --width=<px>         Output GIF width (height auto). Default 800.
//   --out=<path>         Output file. Default ../data/images/<slug>-preview.gif
//   --port=<n>           Dev server port to hit. Default 5173 (SvelteKit's
//                        default `vite dev` port). Requires the dev server
//                        already running (`npm run dev` in this directory).
//   --wait=<ms>          How long to wait for the figure selector to appear.
//                        Default 15000; bump this for known-slow figures.
//
// Requires: `npx playwright install chromium` once, and the system `ffmpeg`
// on PATH (used for GIF encoding via its standard two-pass palette recipe).

import { chromium } from 'playwright';
import { execFileSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';

function parseArgs(argv) {
	const [slug, ...rest] = argv;
	if (!slug || slug.startsWith('--')) {
		console.error('Usage: node scripts/capture-preview.js <route-slug> [options]');
		process.exit(1);
	}
	const opts = {
		selector: '.figure-content',
		duration: 6000,
		fps: 10,
		width: 800,
		port: 5173,
		wait: 15000,
		out: path.resolve(`../data/images/${slug}-preview.gif`)
	};
	for (const arg of rest) {
		const m = arg.match(/^--([a-z]+)=(.*)$/);
		if (!m) continue;
		const [, key, value] = m;
		if (key in opts) {
			opts[key] = ['duration', 'fps', 'width', 'port', 'wait'].includes(key) ? Number(value) : value;
		}
	}
	return { slug, opts };
}

async function main() {
	const { slug, opts } = parseArgs(process.argv.slice(2));

	const browser = await chromium.launch();
	const pageCtx = await browser.newPage({ viewport: { width: 1000, height: 1000 } });

	const url = `http://localhost:${opts.port}/${slug}/`;
	console.log(`Navigating to ${url} ...`);
	await pageCtx.goto(url, { waitUntil: 'networkidle' });

	await pageCtx.waitForSelector(opts.selector, { timeout: opts.wait });
	const target = pageCtx.locator(opts.selector).first();
	await target.scrollIntoViewIfNeeded();
	await pageCtx.waitForTimeout(300); // let the IntersectionObserver-driven isActive flip on

	const box = await target.boundingBox();
	if (!box) {
		console.error(`Could not get a bounding box for selector "${opts.selector}" on ${url}`);
		await browser.close();
		process.exit(1);
	}

	const frameDir = fs.mkdtempSync(path.join(os.tmpdir(), 'viz-preview-'));
	const frameCount = Math.round((opts.duration / 1000) * opts.fps);
	const frameIntervalMs = 1000 / opts.fps;

	console.log(`Capturing ${frameCount} frames at ${opts.fps}fps over ${opts.duration}ms ...`);
	for (let i = 0; i < frameCount; i++) {
		const framePath = path.join(frameDir, `frame-${String(i).padStart(4, '0')}.png`);
		await pageCtx.screenshot({ path: framePath, clip: box });
		await pageCtx.waitForTimeout(frameIntervalMs);
	}

	await browser.close();

	fs.mkdirSync(path.dirname(opts.out), { recursive: true });
	const paletteFile = path.join(frameDir, 'palette.png');

	console.log('Encoding GIF with ffmpeg ...');
	// stats_mode=diff + bayer dithering: much smaller output for animations
	// where most pixels barely change between frames (the common case here),
	// versus the default full-frame palette + Floyd-Steinberg dithering.
	execFileSync('ffmpeg', [
		'-y',
		'-framerate', String(opts.fps),
		'-i', path.join(frameDir, 'frame-%04d.png'),
		'-vf', `scale=${opts.width}:-1:flags=lanczos,palettegen=stats_mode=diff`,
		paletteFile
	]);
	execFileSync('ffmpeg', [
		'-y',
		'-framerate', String(opts.fps),
		'-i', path.join(frameDir, 'frame-%04d.png'),
		'-i', paletteFile,
		'-lavfi', `scale=${opts.width}:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=3:diff_mode=rectangle`,
		opts.out
	]);

	fs.rmSync(frameDir, { recursive: true, force: true });

	const sizeKb = (fs.statSync(opts.out).size / 1024).toFixed(0);
	console.log(`Wrote ${opts.out} (${sizeKb} KB)`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
