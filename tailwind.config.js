/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      width: {
        128: '32rem',
      },
      fontFamily: {
        candara: ['Candara', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
