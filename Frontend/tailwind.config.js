/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-conic': 'conic-gradient(at_left, rgb(134, 239, 172), rgb(253, 224, 71), rgb(249, 168, 212))',
      },
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      "blue": "#0000ff",
      "black": "#000000",
      "red": "#ff0000",
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'cyan': '#06b6d4',
      'lightgreen': '#67C25E',
      'lightgreen2': '#5db054',
      'lightgreen3': '#d1fae5',
      'darkgreen': '#008480',
      'lightPink': '#D9D9D9',
      'lightPinkDark': '#504E4E',
    },
  },
  plugins: [
   
  ],
}