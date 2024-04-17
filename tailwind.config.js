/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1d2a35',
        secondary: '#FFF',
        tertiary: '#203656',
        'dark-subtle': '#FFF',
        'light-subtle': '#418160',
      }
    },
  },
  plugins: [],
}

