import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        about: resolve(rootDir, 'about.html'),
        professional: resolve(rootDir, 'professional.html'),
        projects: resolve(rootDir, 'projects.html'),
        notes: resolve(rootDir, 'notes/notes.html'),
      },
    },
  },
});
