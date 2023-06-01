/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      screens: {
        sm: { min: "280px", max: "699px" },
        md: { min: "700px" },
        lg: { min: "1024px" },
        xl: { min: "1025px", max: "4000px" },
      },
    },
  },
  plugins: [],
};
