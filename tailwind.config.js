/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0E14",
          soft: "#121826",
          softer: "#1A2233",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E8CD82",
          dim: "#9C7F2C",
        },
        cream: "#F3ECDD",
        sand: "#B7AE9C",
        emerald: {
          DEFAULT: "#2F5D50",
          light: "#4C7A6B",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Manrope"', "sans-serif"],
        hand: ['"Caveat"', "cursive"],
        arabic: ['"Amiri"', "serif"],
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        driftUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        driftUp: "driftUp 6s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
