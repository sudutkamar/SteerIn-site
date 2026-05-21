import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    cssMinify: true,
    minify: 'esbuild',
  },
});
