/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red': '#AF1B3F',
        'black': '#0F0F0F',
        'backgray': ' rgb(38,38,38)',
        'darkgray': '#202020',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '5': '5',
        '8': '8',
      },
    },
  },
  plugins: [],
}