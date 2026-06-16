import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://steerin.app',
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  build: {
    assets: 'assets',
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
    },
    build: {
      cssMinify: true,
      minify: 'esbuild',
      chunkSizeWarningLimit: 800,
    },
  },
});
