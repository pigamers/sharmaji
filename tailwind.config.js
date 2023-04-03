/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      scale:{
        '-100' : '-1',
      }
    },
    colors: {
      white: '#fff',
      black: '#000000',
      'one':'#0B0C10',
      'two': '#1F2833',
      'three': '#C5C6C7',
      'four': '#66FCF1',
      'five': '#45A29E',
    },
    fontFamily: {
      fonty: ["Oswald", "sans-serif"],
    },
  },
  plugins: [],
}
