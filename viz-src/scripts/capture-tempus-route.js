import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const value = (name, fallback) => {
  const arg = process.argv.find((item) => item.startsWith(`--${name}=`));
  return arg ? arg.slice(name.length + 3) : fallback;
};

const port = Number(value('port', '5180'));
const route = value('route', 'svgd');
const hook = value('hook', '__exportSvgdPreview');
const outDir = path.resolve(value('out', '../data/images/tempus-captures'));
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  args: ['--disable-dev-shm-usage', '--enable-gpu']
});
const context = await browser.newContext({
  acceptDownloads: true,
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 1
});
const page = await context.newPage();
const savedDownloads = [];

page.on('download', (download) => {
  const destination = path.join(outDir, download.suggestedFilename());
  savedDownloads.push(download.saveAs(destination).then(() => destination));
});
page.on('console', (message) => {
  if (message.type() === 'warning' || message.type() === 'error') {
    process.stderr.write(`[browser ${message.type()}] ${message.text()}\n`);
  }
});

try {
  await page.goto(`http://127.0.0.1:${port}/${route}/?capture=1`, {
    waitUntil: 'networkidle',
    timeout: 60_000
  });
  await page.waitForFunction(
    (hookName) => typeof window[hookName] === 'function',
    hook,
    { timeout: 30_000 }
  );
  await page.evaluate((hookName) => window[hookName](), hook);

  const deadline = Date.now() + 10_000;
  while (savedDownloads.length < 1 && Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (savedDownloads.length !== 1) {
    throw new Error(`Expected one Tempus export, received ${savedDownloads.length}`);
  }
  process.stdout.write(`${await savedDownloads[0]}\n`);
} finally {
  await browser.close();
}
