import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A1025",
        plum: "#2B1A38",
        magenta: "#E91E8C",
        ember: "#FF7A33",
        gold: "#FFCB6B",
        cream: "#FDF8F3",
        haze: "#8A7E99",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #E91E8C 0%, #FF7A33 100%)",
        "brand-gradient-soft": "linear-gradient(160deg, #2B1A38 0%, #1A1025 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
