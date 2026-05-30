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
  plugins: [
    {
      name: 'configure-server',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.endsWith('.apk')) {
            res.setHeader('Content-Type', 'application/vnd.android.package-archive');
            res.setHeader('Content-Disposition', 'attachment');
          } else if (req.url.endsWith('.sha256')) {
            res.setHeader('Content-Type', 'text/plain');
          }
          next();
        });
      },
    },
  ],
});
