// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  srcDir: "./src/client",

  vite: {
    plugins: [tailwindcss()],
  },
});
