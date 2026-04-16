import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wii U / Miiverse inspired palette
        wii: {
          sky: "#BEE3F8",
          cloud: "#F7FAFC",
          cream: "#E5FAE3",
          grass: "#82CA1C",
          mint: "#A7F3D0",
          lemon: "#FDE68A",
          ink: "#1F2937",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        wii: "0 10px 0 0 rgba(31,41,55,0.08), 0 20px 40px -20px rgba(31,41,55,0.25)",
        "wii-hover":
          "0 14px 0 0 rgba(31,41,55,0.10), 0 30px 60px -20px rgba(31,41,55,0.35)",
      },
      borderRadius: {
        blob: "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pop: {
          "0%": { transform: "scale(0.95)" },
          "60%": { transform: "scale(1.03)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pop: "pop 350ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
