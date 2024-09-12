import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [icon({iconDir: "src/assets/icons"}), solidJs(), tailwind({
    applyBaseStyles: false
  }), sitemap()]
});