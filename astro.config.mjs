// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Michroma",
    cssVariable: "--font-michroma",
  }],

  vite: {
    plugins: [tailwindcss()]
  }
});