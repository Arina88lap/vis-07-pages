import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';

const { homepage } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
const pagesPath = new URL(homepage).pathname;

export default defineConfig(({ command, isPreview }) => ({
  base: process.env.VIS_BASE_PATH || (command === 'build' || isPreview ? pagesPath : '/'),
  server: { proxy: { '/api': 'http://127.0.0.1:3001' } },
}));
