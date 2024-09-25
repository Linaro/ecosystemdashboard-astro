import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import pagefind from "./integrations/pagefind";
import { loadEnv } from "vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import aws from "astro-sst";

const { IS_PUBLIC, PRE_BUILD, CUSTOM_DOMAIN } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);
const is_public = IS_PUBLIC === "true";
const is_pre_build = PRE_BUILD === "true";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: aws(),
  integrations: [
    icon({ iconDir: "src/assets/icons" }),
    solidJs(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    pagefind({
      is_pre_build: is_pre_build,
      is_public: is_public,
    }),
    mdx(),
  ],
  site: `https://${CUSTOM_DOMAIN}`,
  cacheDir: "./cache",
  compressHTML: true,
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      },
    },
  },
  build: {
    rollupOptions: {
      external: ["/pagefind/pagefind.js"],
    },
    redirects: true,
  },
  vite: {
    optimizeDeps: { exclude: ["auth:config"] },
  },
});
