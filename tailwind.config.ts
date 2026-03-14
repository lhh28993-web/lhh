import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1722",
        "ink-soft": "#516072",
        stone: "#EEF2F6",
        line: "rgba(15, 23, 34, 0.12)",
        accent: "#2B6FD8",
        "accent-deep": "#17408C",
        "panel-dark": "#0C121A",
      },
      boxShadow: {
        panel: "0 24px 64px rgba(8, 15, 24, 0.08)",
        glow: "0 16px 36px rgba(43, 111, 216, 0.16)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(15, 23, 34, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 34, 0.05) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "\"PingFang SC\"", "\"Microsoft YaHei\"", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
