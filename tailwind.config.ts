import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#080B0A",
        dark: "#0E1412",
        dark2: "#141A18",
        dark3: "#1C2421",
        green: "#00E5A0",
        green2: "#00C487",
        lime: "#BAFF47",
        cream: "#F0F5F2",
        muted: "#7A9086",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm)", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};

export default config;
