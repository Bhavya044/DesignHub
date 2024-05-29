/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        verdana: ['Verdana', 'sans-serif'],
      },
      colors: {
        gold: '#ab853a', // Replace with your desired gold color code
      },
    },
  },
  plugins: [],
};
