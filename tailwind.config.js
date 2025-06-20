/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // Automatically uses user's OS dark mode setting
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/swiper/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16a34a", // Tailwind's green-600
          light: "#22c55e",   // green-500
          dark: "#15803d",    // green-700
        },
        gray: {
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        sans: ["Mulish", "ui-sans-serif", "system-ui"],
      },
      spacing: {
        'screen-header': '4rem',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
