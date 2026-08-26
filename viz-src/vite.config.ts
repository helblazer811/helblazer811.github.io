import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { wgslPlugin } from '@helblazer811/tempus-ui/vite-plugin';

export default defineConfig({
	plugins: [sveltekit(), wgslPlugin()]
});
