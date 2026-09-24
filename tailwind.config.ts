import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0C",
        plum: "#15131A",
        magenta: "#D9569B",
        ember: "#E3925A",
        gold: "#D9AD63",
        cream: "#F5EFE4",
        haze: "#9C93A8",
        batik: "#B25B45",
        indigo: "#2A3550",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #D9569B 0%, #E3925A 100%)",
        "brand-gradient-soft": "linear-gradient(160deg, #15131A 0%, #0A0A0C 65%)",
        "brand-mesh":
          "radial-gradient(60% 50% at 20% 20%, rgba(217,86,155,0.22) 0%, rgba(217,86,155,0) 60%), radial-gradient(55% 45% at 85% 15%, rgba(217,173,99,0.22) 0%, rgba(217,173,99,0) 60%), radial-gradient(65% 55% at 60% 90%, rgba(227,146,90,0.2) 0%, rgba(227,146,90,0) 65%), linear-gradient(160deg, #15131A 0%, #0A0A0C 70%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "1" },
        },
        "pulse-glow": {
          "0%": { boxShadow: "0 0 0 0 rgba(217,173,99,0.45)" },
          "70%": { boxShadow: "0 0 0 16px rgba(217,173,99,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(217,173,99,0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        "gradient-pan": "gradient-pan 12s ease infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s ease-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        blob: "blob 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
