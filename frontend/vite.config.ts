import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import fs from "node:fs"

const isDev = process.env.NODE_ENV === "development"

export default defineConfig({
  plugins: [react()],
  server: isDev
      ? {
        host: true,
        port: 5173,
        https: {
          key: fs.readFileSync("./localhost+1-key.pem"),
          cert: fs.readFileSync("./localhost+1.pem"),
        },
      }
      : undefined,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})