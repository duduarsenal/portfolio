/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black-transparent': 'rgba(32, 32, 32, 0.500)',
      'red-transparent': 'rgba(206, 108, 108, 0.2)',
      'hover-black': 'rgba(32, 32, 32, 0.900)',
      'header-color': 'rgb(32, 32, 32)',
    },
    extend: {
      backgroundImage: {
        'grid-layout': "url('src/assets/grid.svg')"
      }
    },
  },
  plugins: [],
}