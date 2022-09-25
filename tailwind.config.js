/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary : '#F37859',
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary : ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}