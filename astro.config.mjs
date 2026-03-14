// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexkonovalov.com', // Replace with your actual domain

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx(), sitemap()]
});