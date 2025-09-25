/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#f7cccb",
        sec: "#e0bbba",
        tr: "#dea1a0",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        title: ["Cinzel", "serif"],
        body: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
}

