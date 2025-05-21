/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          poetsen: ['"Poetsen One"', 'cursive'],
          quicksand: ['Quicksand', 'sans-serif'],
          baloo: ['"Baloo 2"', 'cursive'],
        },
      },
    },
    plugins: [],
  }
  