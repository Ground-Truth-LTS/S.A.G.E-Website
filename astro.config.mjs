// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  //site: 'https://emmagonz22.github.io',
  site: 'https://groundtruthlts.xyz'
  /*base: import.meta.env.PROD ? '/S.A.G.E-Website/' : '/',*/
});