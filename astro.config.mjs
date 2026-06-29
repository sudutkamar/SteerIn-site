import { defineConfig } from 'astro/config';

export default defineConfig(async () => {
  const isVercel = !!process.env.VERCEL;

  const config = {
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
  }

  // Cloudflare adapter hanya dipakai saat deploy ke Cloudflare,
  // bukan Vercel. Vercel pakai static output standar Astro.
  if (!isVercel) {
    const { default: cloudflare } = await import('@astrojs/cloudflare')
    config.adapter = cloudflare()
  }

  return config
})
