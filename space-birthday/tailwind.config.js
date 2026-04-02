/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        space: '#0a0a2a',
        pink: '#ff69b4',
        purple: '#c026d3',
      }
    },
  },
  plugins: [],
}