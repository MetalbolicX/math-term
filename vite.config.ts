import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: "src/math-term.ts",
      formats: ["es"],
    },
  },
});
