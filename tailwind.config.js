/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(228, 5%, 15%)',
        secondary: '#FFF',
        'dark-subtle': 'hsl(228, 5%, 80%)',
        'light-subtle': '#222',
      }
    },
  },
  plugins: [],
}

