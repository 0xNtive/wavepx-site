import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'app',
  base: './',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'app/index.html'),
        app: resolve(__dirname, 'app/app.html'),
      },
    },
  },
  resolve: {
    alias: {
      // During development, resolve wavepx to local source.
      // After wavepx is published to npm, remove this alias
      // and add wavepx as a dependency instead.
      'wavepx': resolve(__dirname, 'lib/index.ts'),
    },
  },
});
