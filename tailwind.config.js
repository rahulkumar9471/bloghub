/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#418160',
        secondary: '#272727',
        'dark-subtle': 'rgba(255,255,255,0.5)',
        'light-subtle': 'rgba(39,39,39,0.5)',
      }
    },
  },
  plugins: [],
}

