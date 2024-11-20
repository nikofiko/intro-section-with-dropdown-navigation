/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue"]
      },
      colors: {
        'almost-black' : "hsl(0, 0%, 8%)",
        'medium-gray' : 'hsl(0, 0%, 41%)',
        'overlay': 'rgba(0, 0, 0, 0.5)'
      },
      content: {
        iconDown: "url(/images/icon-arrow-down.svg)",
        iconUp: "url(/images/icon-arrow-up.svg)"
      },
      boxShadow: {
        custom: '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
      screens: {
        'mobile': '376px',
      }
    },
  },
  plugins: [],
}

