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
      },
      boxShadow: {
        'neumorphism': '20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff',
        'dark-neumorphism': '20px 20px 60px #020202,-20px -20px 60px #040404',
      },
      backgroundColor: {
        'dark': '#050505',
      },
      backgroundImage: {
        'gradient': 'linear-gradient( 111.2deg,  #e80505 1.7%, #fb16ba 98.7% )',
      }
    },
  },
  plugins: [],
}
