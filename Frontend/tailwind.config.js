/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6fff",
        white: "#ffffff", // correct 6-digit hex
      },
    },
  },
  plugins: [],
}
