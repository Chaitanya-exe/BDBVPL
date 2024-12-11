/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from "tailwindcss-motion";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./admin/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        green: "#4CAF50",
        softgreen: "#81C784",
        solarYellow: "#FFC107",
        softYellow: "#FFEB3B",
        text: "#333333",
        deepTeal: "#00796B",
        skyBlue: "#E0F7FA",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssMotion],
};
