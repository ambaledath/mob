// https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["node_modules"],
    setupFiles: ["./src/vitest.setup.ts"],
    css: true,
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: "build",
  },
});
