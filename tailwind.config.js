/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(15 23 42)',
        secondary: '#FFF',
        tertiary: 'rgb(30 41 59)',
        'dark-subtle': '#fff',
        'light-subtle': '#203656',
      }
    },
  },
  plugins: [],
}

