import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://steerin.app',
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      chunkSizeWarningLimit: 800,
    },
  },
});
