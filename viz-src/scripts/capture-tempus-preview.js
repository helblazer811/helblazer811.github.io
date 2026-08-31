import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const portArg = process.argv.find((arg) => arg.startsWith('--port='));
const outArg = process.argv.find((arg) => arg.startsWith('--out='));
const debugShotArg = process.argv.find((arg) => arg.startsWith('--debug-shot='));
const useGpu = !process.argv.includes('--cpu');
const useHardwareGpu = process.argv.includes('--hardware-gpu')
  || (useGpu && process.platform === 'darwin');
const headed = process.argv.includes('--headed');
const port = Number(portArg?.split('=')[1] || 5180);
const outDir = path.resolve(outArg?.slice('--out='.length) || '../data/images/helmholtz-tempus');

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  headless: !headed,
  args: [
    '--disable-dev-shm-usage',
    '--enable-unsafe-webgpu',
    '--enable-dawn-features=allow_unsafe_apis',
    '--disable-dawn-features=use_dxc',
    '--enable-webgpu-developer-features',
    '--use-gpu-in-tests',
    '--enable-accelerated-2d-canvas',
    ...(useGpu && !useHardwareGpu ? ['--use-webgpu-adapter=swiftshader'] : []),
    ...(useHardwareGpu ? ['--enable-gpu'] : []),
  ]
});
const context = await browser.newContext({
  acceptDownloads: true,
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2
});
const page = await context.newPage();
const savedDownloads = [];

page.on('console', (message) => {
  if (message.type() === 'warning' || message.type() === 'error') {
    process.stderr.write(`[browser ${message.type()}] ${message.text()}\n`);
  }
});

page.on('download', (download) => {
  const destination = path.join(outDir, download.suggestedFilename());
  savedDownloads.push(download.saveAs(destination).then(() => destination));
});

try {
    const captureQuery = useGpu ? '?capture=gpu' : '?capture=cpu';
    await page.goto(`http://127.0.0.1:${port}/helmholtz-decomposition/${captureQuery}`, {
    waitUntil: 'networkidle',
    timeout: 60_000
  });
  await page.waitForFunction(
    () => typeof window.__exportHelmholtzPreview === 'function',
    { timeout: 30_000 }
  );
  if (debugShotArg) {
    await page.waitForTimeout(1_000);
    await page.locator('.hd-figure').screenshot({
      path: path.resolve(debugShotArg.slice('--debug-shot='.length))
    });
  }
  await page.evaluate(() => window.__exportHelmholtzPreview());

  const deadline = Date.now() + 10_000;
  while (savedDownloads.length < 3 && Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (savedDownloads.length !== 3) {
    throw new Error(`Expected 3 Tempus exports, received ${savedDownloads.length}`);
  }

  const paths = await Promise.all(savedDownloads);
  paths.forEach((savedPath) => process.stdout.write(`${savedPath}\n`));
} finally {
  await browser.close();
}
