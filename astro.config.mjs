import { defineConfig, sharpImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://son-tran.vercel.app/',
  markdown: {
    shikiConfig: {
      theme: 'dracula-soft',
      wrap: true,
    },
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
});
