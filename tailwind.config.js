/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '1/10': '10%',
      }
    },
  },
  plugins: [],
}
