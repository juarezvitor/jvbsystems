import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base:    "#F0F2EF",
        surface: "#E8EBE6",
        card:    "#ECEEE9",
        inset:   "#E2E5DF",
        green:   "#00C47A",
        "green-dark":  "#007A4D",
        "green-light": "#D4F5E6",
        navy:    "#0F2744",
        "navy-light":  "#1A3A5C",
        ink:     "#0F1A12",
        secondary: "#3D5247",
        muted:   "#6B8278",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body:    ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
