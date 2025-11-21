import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://minerva-systems.github.io/minerva-web',
  // Base path for GitHub Pages deployment
  // For local development, you can temporarily set this to '/' or access via /minerva-web/
  base: '/minerva-web',
});

