import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/github.com/Alpy81",
    ...(command !== "serve" && { base: "/cryptocurrency-app-react/" }),
  };

  return config;
});
