// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  srcDir: "./src/client",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});