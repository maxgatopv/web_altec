/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./build/*.html"],

  theme: {
    extend: {
      colors: {
        'primary': '#003a76',
        'primaryDark': '#012143',
      },
      fontFamily: {
        'sukhumvit': ['Sukhumvit', 'sans-serif'], // Define the custom font
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      const headings = {
        'h1': '4xl',
        'h2': '3xl',
        'h3': '2xl',
        'h4': 'xl',
        'h5': 'lg'
      };
  
      addBase(Object.fromEntries(
        Object.entries(headings).map(([tag, size]) => [
          tag, { fontSize: theme(`fontSize.${size}`), fontWeight: theme('fontWeight.bold') }
        ])
      ));
    })
  ]
};
