import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { copyFile } from 'fs/promises';
import path from 'path';

export default defineConfig({
  base: './', // Make asset paths relative
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo192.png', 'logo512.png'],
      manifest: {
        name: 'Biine Buy & Sell App',
        short_name: 'Biine App',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ec93e8',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      }),
    
    // ✅ Add this custom plugin
    {
      name: 'copy-ads-txt',
      closeBundle: async () => {
        const src = path.resolve(__dirname, 'public/ads.txt');
        const dest = path.resolve(__dirname, 'dist/ads.txt');
        try {
          await copyFile(src, dest);
          console.log('✅ ads.txt copied to dist/');
        } catch (err) {
          console.error('❌ Failed to copy ads.txt:', err);
        }
      }
    }
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react';
            if (id.includes('firebase')) return 'firebase';
            if (id.includes('flowbite')) return 'flowbite';
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['flowbite-react'],
  },
});
