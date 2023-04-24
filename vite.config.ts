/// <reference types="vitest" />
// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "feedback-ts",
      fileName: "feedback-ts",
    },
  },
  plugins: [dts()],
});
