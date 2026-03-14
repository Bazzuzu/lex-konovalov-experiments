// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexkonovalov.github.io', // Placeholder - update with your username
  base: '/lex-konovalov-experiments', // Placeholder - update with your repo name if needed

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx(), sitemap()]
});