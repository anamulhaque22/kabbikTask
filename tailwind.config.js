/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        primary: "#000000",
        secondary: "#2F8F6F",
        tertiary: "#163A2E",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        italianno: ["Italianno", "cursive"],
        "archivo-narrow": ["Archivo Narrow", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
      },
      boxShadow: {
        custom: "-2px 1px 9px 10px rgba(0,57,40,0.82) inset",
      },
    },
  },
  plugins: [],
};
