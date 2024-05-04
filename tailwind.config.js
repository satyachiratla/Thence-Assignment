/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        coveredByYourGrace: ["Covered By Your Grace", "sans-serif"],
      },
    },
  },
  plugins: [],
};
