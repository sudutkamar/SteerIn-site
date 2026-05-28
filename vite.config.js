import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
        },
      },
    },
  },
});
