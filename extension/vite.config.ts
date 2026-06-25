import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { crx } from "@crxjs/vite-plugin"
import manifest from "./manifest.config"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), crx({ manifest })],
  server: {
    hmr: {
      host: "localhost",
      port: 5173,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
