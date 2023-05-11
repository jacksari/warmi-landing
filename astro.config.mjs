import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import image from '@astrojs/image';

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [
    vue({}),
    tailwind({
      config: {
        path: "./tailwind.config.cjs",
      },
    }),
    // image()
  ],
});
