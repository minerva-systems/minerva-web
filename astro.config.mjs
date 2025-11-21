import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://minerva-systems.io',
  base: '/', // important for root deployment
});
