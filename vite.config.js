import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VIS_BASE_PATH || '/',
  server: { proxy: { '/api': 'http://127.0.0.1:3001' } },
});
