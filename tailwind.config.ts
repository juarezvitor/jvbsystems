import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black:   "#06080A",
        dark:    "#0C0F12",
        dark2:   "#111419",
        dark3:   "#181D22",
        surface: "#1E242B",
        green:   "#00E5A0",
        green2:  "#00C487",
        lime:    "#C8FF47",
        cream:   "#F2F5F3",
        muted:   "#6B8278",
        muted2:  "#8FA89E",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body:    ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "28px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "none" },
        },
        "pulse-dot": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,229,160,0.5)" },
          "50%":       { boxShadow: "0 0 0 6px rgba(0,229,160,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
