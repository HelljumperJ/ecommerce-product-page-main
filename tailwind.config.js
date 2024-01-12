/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[ "./src/**/*.{html,js}" , "*.{html,js}" , "./assets/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },

}

