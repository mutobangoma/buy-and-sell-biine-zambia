// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: "dist",
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['flowbite-react'],
  },
});
