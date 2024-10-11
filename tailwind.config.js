/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-backround.jpg')" // Corrected file name
      },
    },
    fontFamily: {
      'main': ['Orbitron', 'sans-serif']
    }
  },
  plugins: [],
}

