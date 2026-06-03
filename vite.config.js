import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      ignored: [
        '**/src/assets/**',
        '**/*.tmp',
        '**/~$*',
        '**/*.pdf'
      ]
    }
  }
});
