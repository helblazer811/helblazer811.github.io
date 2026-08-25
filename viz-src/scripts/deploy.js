// Copies the built site into ../visualizations and stages + commits the
// change. Unlike DiffusionExplorer's per-app deploy.js scripts, no clone
// step is needed: viz-src and the deployed visualizations/ directory
// already live in the same repo.
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

const buildDir = path.resolve('./build');
const targetDir = path.resolve('../visualizations');

if (!fs.existsSync(buildDir)) {
	console.error('No build/ directory found — run `npm run build` first.');
	process.exit(1);
}

console.log('Cleaning old visualizations/...');
fs.removeSync(targetDir);

console.log('Copying new build...');
fs.copySync(buildDir, targetDir);

console.log('Staging and committing...');
const repoRoot = path.resolve('..');
execSync('git add visualizations', { cwd: repoRoot, stdio: 'inherit' });
try {
	execSync('git commit -m "Update visualizations"', { cwd: repoRoot, stdio: 'inherit' });
	console.log('Committed. Run `git push` from the repo root when ready.');
} catch (err) {
	console.log('Nothing to commit (visualizations/ unchanged).');
}
