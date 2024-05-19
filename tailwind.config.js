/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontSize: {
      /* 
      
      
      
      "2xl": "1.563rem",
     */ sm: "0.9rem",
      base: "1rem",
      xl: "1.25rem" /* 20px */,
      "3xl": "1.875rem" /* 30px */,
      "4xl": "2.813rem" /* 45px */,
      "5xl": "3.125rem" /* 50px */,
      "6xl": "3.75rem" /* 60px */,
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        customGray: "#484A56",
      },
      fontFamily: {
        "avant-garde-book": ["ITC Avant Garde Gothic Std", "sans-serif"],
        "avant-garde-extralight": [
          "ITC Avant Garde Gothic Std ExtraLight",
          "sans-serif",
        ],
        "avant-garde-bold": ["ITC Avant Garde Gothic Std Bold", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
