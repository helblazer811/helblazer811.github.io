// Records a short muted looping MP4 of a visualization page's figure, for
// use as its `previewUrl` banner thumbnail on the portfolio site's
// homepage/blog.html (both already render `.mp4` previewUrls as
// <video autoplay muted loop>). MP4/H.264 plays far smoother than a
// palette-limited GIF at the same file size, so this is the default; pass
// `--format=gif` if a GIF is ever specifically wanted (e.g. for embedding
// somewhere that can't play video).
//
// Usage:
//   node scripts/capture-preview.js <route-slug> [options]
//
// Options (all optional):
//   --selector=<css>   Element to capture. Default ".figure-content" — the
//                       div FigureBlock.svelte wraps the figure in, as a
//                       sibling of <figcaption>, so this naturally excludes
//                       the caption without any special-casing per page.
//                       Figures with bespoke layouts (not using FigureBlock)
//                       need their own selector — e.g. ".hd-figure" for the
//                       Helmholtz decomposition figures.
//   --duration=<ms>     How long to record. Default 6000.
//   --fps=<n>            Capture rate. Default 20 (cheap for video, unlike GIF).
//   --width=<px>         Output width (height auto). Default 800.
//   --format=<gif|mp4>   Output format. Default mp4.
//   --out=<path>         Output file. Default ../data/images/<slug>-preview.<ext>
//   --port=<n>           Dev server port to hit. Default 5173 (SvelteKit's
//                        default `vite dev` port). Requires the dev server
//                        already running (`npm run dev` in this directory).
//   --wait=<ms>          How long to wait for the figure selector to appear
//                        in the DOM. Default 15000; bump for known-slow figures.
//   --settle=<ms>        How long to wait after the selector appears, before
//                        measuring its crop box and starting capture — some
//                        figures need time to actually draw their canvas
//                        content (or resize/break out to full width) after
//                        their wrapper element first appears. Default 1500;
//                        bump for figures whose canvas draws well after mount.
//
// Requires: `npx playwright install chromium` once, and the system `ffmpeg`
// on PATH.

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
		fps: 20,
		width: 800,
		port: 5173,
		wait: 15000,
		settle: 1500,
		format: 'mp4',
		webgpu: false,
		out: null
	};
	for (const arg of rest) {
		if (arg === '--webgpu') {
			opts.webgpu = true;
			continue;
		}
		const m = arg.match(/^--([a-z]+)=(.*)$/);
		if (!m) continue;
		const [, key, value] = m;
		if (key in opts) {
			opts[key] = ['duration', 'fps', 'width', 'port', 'wait', 'settle'].includes(key)
				? Number(value)
				: value;
		}
	}
	if (!opts.out) {
		opts.out = path.resolve(`../data/images/${slug}-preview.${opts.format}`);
	}
	return { slug, opts };
}

async function main() {
	const { slug, opts } = parseArgs(process.argv.slice(2));

	// --enable-unsafe-webgpu: Playwright's bundled Chromium has no WebGPU
	// adapter by default, unlike a normal desktop Chrome — without this flag,
	// a figure that *requires* WebGPU (e.g. line-integral-convolution) hangs
	// forever waiting for content that never draws. Opt-in only (--webgpu):
	// some figures merely *attempt* WebGPU acceleration with a CPU fallback,
	// and forcing that path on unconditionally has caused browser crashes on
	// at least one of them here — leave it off unless a figure actually needs it.
	// --disable-dev-shm-usage: use disk instead of /dev/shm for shared memory —
	// the standard fix for Chromium crashing/dying silently under memory
	// pressure or a small /dev/shm, common on constrained or heavily-loaded
	// machines.
	const launchArgs = ['--disable-dev-shm-usage'];
	if (opts.webgpu) launchArgs.push('--enable-unsafe-webgpu');
	const browser = await chromium.launch({ args: launchArgs });
	const pageCtx = await browser.newPage({ viewport: { width: 1000, height: 1000 } });

	const url = `http://localhost:${opts.port}/${slug}/`;
	console.log(`Navigating to ${url} ...`);
	await pageCtx.goto(url, { waitUntil: 'networkidle' });

	await pageCtx.waitForSelector(opts.selector, { timeout: opts.wait });
	const target = pageCtx.locator(opts.selector).first();
	await target.scrollIntoViewIfNeeded();
	// Let the IntersectionObserver-driven isActive flip on AND layout settle —
	// some figures break out to full-viewport width, resize their canvas, or
	// take a while to actually draw after mount, so measuring/capturing too
	// early crops the wrong region or grabs a still-blank frame.
	await pageCtx.waitForTimeout(opts.settle);

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

	console.log(`Encoding ${opts.format} with ffmpeg ...`);
	if (opts.format === 'mp4') {
		execFileSync('ffmpeg', [
			'-y',
			'-framerate', String(opts.fps),
			'-i', path.join(frameDir, 'frame-%04d.png'),
			'-vf', `scale=${opts.width}:-2:flags=lanczos`,
			'-c:v', 'libx264',
			'-pix_fmt', 'yuv420p', // required for Safari/iOS playback
			'-crf', '23',
			'-preset', 'medium',
			'-movflags', '+faststart', // moov atom up front, so it plays before fully downloaded
			'-an',
			opts.out
		]);
	} else {
		const paletteFile = path.join(frameDir, 'palette.png');
		// stats_mode=diff + bayer dithering: much smaller output for animations
		// where most pixels barely change between frames, versus the default
		// full-frame palette + Floyd-Steinberg dithering.
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
	}

	fs.rmSync(frameDir, { recursive: true, force: true });

	const sizeKb = (fs.statSync(opts.out).size / 1024).toFixed(0);
	console.log(`Wrote ${opts.out} (${sizeKb} KB)`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
