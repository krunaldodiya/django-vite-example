import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/static/",
  root: resolve("./static/src"),
  resolve: {
    extensions: [".js", ".json"],
  },
  build: {
    outDir: resolve("./static/dist"),
    assetsDir: "",
    manifest: true,
    emptyOutDir: true,
    target: "es2015",
    rollupOptions: {
      input: {
        main: resolve("./static/src/js/main.js"),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
});
