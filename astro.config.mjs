// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://digitaltechnologiesou.github.io',
  base: '/leadflow-landing',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de', 'fr', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
