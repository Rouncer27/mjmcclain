// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    css: {
      devSourcemap: true, // ✅ Enables CSS/SCSS source maps for better debugging
    },
  },
  site: "https://mjmcclain.netlify.app/",
  integrations: [react(), sitemap()],
  image: {
    domains: ["mjmclain.swbdatabases3.ca"],
  },
});
