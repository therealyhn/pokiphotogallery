/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        title: ["Cinzel", "serif"],
        body: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
}
