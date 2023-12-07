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
      aspectRatio: {
        '4/3': '4 / 3',
        '2/4': '2 / 4',
      },
      screens: {
      
        'XSmobile': '100px',
  
        
        'Smobile': '250px',
  
        'Mmobile': '385px',
         
        'Lmobile': '445px',
  
        'minitab' : '550px',
  
        'tablet': '640px',
  
        'notebook': '960px',
  
        'laptop': '1324px',
  
        'desktop': '1580px',
      },
    },
  },
  plugins: [],
}