import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ink-900": "#050505",
        "ink-800": "#0B0B0F",
        "ink-700": "#111117",
        "mesh-purple": "#8B5CF6",
        "mesh-cyan": "#22D3EE",
        "mesh-teal": "#5EEAD4",
        "mesh-pink": "#F472B6"
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.12)",
        soft: "0 12px 40px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
