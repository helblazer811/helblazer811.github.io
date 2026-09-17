import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const port = Number(process.argv.find((arg) => arg.startsWith('--port='))?.split('=')[1] ?? 5173);
const output = path.resolve('static/continuous-flow-discrete-language.mp4');
const poster = path.resolve('static/continuous-flow-discrete-language-poster.jpg');
const frameDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'discrete-language-flow-'));
const fps = 20;
const durationSeconds = 9;

const browser = await chromium.launch({
	args: ['--disable-dev-shm-usage', '--enable-gpu', '--enable-unsafe-webgpu']
});
const context = await browser.newContext({
	viewport: { width: 1920, height: 1080 },
	deviceScaleFactor: 1
});
const page = await context.newPage();

try {
	await page.goto(`http://127.0.0.1:${port}/continuous-flow-discrete-language/?capture=1`, {
		waitUntil: 'networkidle',
		timeout: 60_000
	});
	await page.waitForSelector('.discrete-flow-stage');
	await page.waitForFunction(() => typeof window.__seekDiscreteLanguageFlow === 'function');

	const frameCount = fps * durationSeconds;
	for (let frame = 0; frame < frameCount; frame += 1) {
		await page.evaluate((cycle) => window.__seekDiscreteLanguageFlow(cycle), frame / (frameCount - 1));
		// WebGPU submits asynchronously. Let Chromium present the submitted texture
		// before Playwright snapshots the composited page.
		await page.evaluate(() => new Promise((resolve) =>
			requestAnimationFrame(() => requestAnimationFrame(resolve))
		));
		await page.screenshot({
			path: path.join(frameDirectory, `frame-${String(frame).padStart(4, '0')}.png`)
		});
	}
} finally {
	await browser.close();
}

execFileSync('ffmpeg', [
	'-y',
	'-framerate', String(fps),
	'-i', path.join(frameDirectory, 'frame-%04d.png'),
	'-c:v', 'libx264',
	'-pix_fmt', 'yuv420p',
	'-crf', '20',
	'-preset', 'medium',
	'-movflags', '+faststart',
	'-an',
	output
], { stdio: 'inherit' });

execFileSync('ffmpeg', [
	'-y',
	'-ss', '7.4',
	'-i', output,
	'-frames:v', '1',
	'-q:v', '2',
	poster
], { stdio: 'inherit' });

fs.rmSync(frameDirectory, { recursive: true, force: true });
process.stdout.write(`Wrote ${output}\nWrote ${poster}\n`);
