import { chromium } from 'playwright';
import { execFileSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';

const fps = 30;
const durationMs = 24_600;
const frameCount = Math.round((durationMs / 1000) * fps);
const repoRoot = path.resolve('..');
const output = path.join(repoRoot, 'data/images/neon-diffusion-preview.mp4');
const poster = path.join(repoRoot, 'data/images/neon-diffusion-preview-poster.jpg');
const frameDir = fs.mkdtempSync(path.join(os.tmpdir(), 'neon-diffusion-'));

const browser = await chromium.launch({ args: ['--disable-dev-shm-usage'] });
try {
	const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
	await page.goto('http://127.0.0.1:5173/neon-diffusion/', { waitUntil: 'networkidle' });
	await page.waitForFunction(() => typeof window.__renderNeonFrame === 'function');
	await page.waitForTimeout(1200);
	const canvas = page.locator('canvas');

	for (let frame = 0; frame < frameCount; frame += 1) {
		const value = frame / (frameCount - 1);
		await page.evaluate((progress) => window.__renderNeonFrame(progress), value);
		await canvas.screenshot({ path: path.join(frameDir, `frame-${String(frame).padStart(4, '0')}.png`) });
		if (frame % 90 === 0) console.log(`Rendered ${frame}/${frameCount} frames`);
	}

	fs.mkdirSync(path.dirname(output), { recursive: true });
	execFileSync('ffmpeg', [
		'-y',
		'-framerate', String(fps),
		'-i', path.join(frameDir, 'frame-%04d.png'),
		'-c:v', 'libx264',
		'-pix_fmt', 'yuv420p',
		'-crf', '18',
		'-preset', 'medium',
		'-movflags', '+faststart',
		'-an',
		output
	], { stdio: 'inherit' });
	execFileSync('ffmpeg', [
		'-y',
		'-ss', '1.5',
		'-i', output,
		'-frames:v', '1',
		'-q:v', '2',
		poster
	], { stdio: 'inherit' });
	console.log(`Wrote ${output}`);
	console.log(`Wrote ${poster}`);
} finally {
	await browser.close();
	fs.rmSync(frameDir, { recursive: true, force: true });
}
