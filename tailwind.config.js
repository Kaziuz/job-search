/** @type {import('tailwindcss').Config} */

// import all porperties default from tailwind css
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      // https://tailwindcss.com/docs/font-family#customizing-the-default-font
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333'
      }
    }
  },
  plugins: []
}
