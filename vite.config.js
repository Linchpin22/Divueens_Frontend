import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // tailwindcss waas not working so this is the solution
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
