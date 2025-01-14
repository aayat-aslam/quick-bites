import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import * as fs from "node:fs";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    https: {
      key: fs.readFileSync('./localhost+1-key.pem'),
      cert: fs.readFileSync('./localhost+1.pem'),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
