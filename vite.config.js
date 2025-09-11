import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
        },
        gray: {
          800: "#1f2937",
          900: "#111827",
        },
      },
    },
  },
});
