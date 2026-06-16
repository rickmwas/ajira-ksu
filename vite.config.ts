import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  plugins: [
    tanstackStart({ server: { entry: "src/server" } }),
    tailwindcss(),
    react(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
