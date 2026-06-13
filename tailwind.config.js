/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#f2fbf7',
          100: '#e3f7ee',
          200: '#c2eeda',
          300: '#93dfc0',
          400: '#5cc9a0',
          500: '#34af85',
          600: '#258f6c',
          700: '#1f7359',
          800: '#1d5b48',
          900: '#194b3d',
        },
        gold: {
          light: '#e8d9ae',
          DEFAULT: '#c9a24b',
          dark: '#a8861f',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
};
