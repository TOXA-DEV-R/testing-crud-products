import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "./src/assets/css/quasar-variables.sass",
    }),
  ],
  resolve: {
    alias: {
      "#components": path.resolve(__dirname, "./src/components"),
      "#pages": path.resolve(__dirname, "./src/pages"),
      "#store": path.resolve(__dirname, "./src/store"),
      "#types": path.resolve(__dirname, "./src/types"),
      "#composable": path.resolve(__dirname, "./src/composable"),
      "#api": path.resolve(__dirname, "./src/api"),
    },
  },
});
