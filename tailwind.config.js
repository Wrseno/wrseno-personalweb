/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ad081b',
        secondary: 'rgb(220 38 38)',
      },
      dropShadow: {
        '3xl': '0 3px 3px rgba(255, 255, 255, 1)',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
