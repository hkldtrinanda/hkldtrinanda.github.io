const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors : {
        jett: {  
          default: "#343434",  
          50: "#A7A7A7",  
          100: "#9A9A9A",  
          200: "#818181",  
          300: "#676767",  
          400: "#4E4E4E",  
          500: "#343434",  
          600: "#1A1A1A",  
          700: "#010101",  
          800: "#000000",  
          900 : "#000000"},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
