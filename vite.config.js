import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.pdf'],
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
