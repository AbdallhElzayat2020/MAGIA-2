/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#407bff',
        'main-blue': '#083e96',
        'dark-bg': '#263238',
        'light-bg': '#2e4978',
      },
    },
    fontFamily: {
      'roboto': "'Roboto', sans-serif",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'lg': '5rem',
        'md': '2.5rem',
        'sm': '1rem',
      },
    },
  },
  plugins: [],
};