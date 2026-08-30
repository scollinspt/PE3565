import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://scollinspt.github.io',
  base: '/PE3565',
  integrations: [react()],
});