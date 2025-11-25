// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem', // 10px
        'micro': '0.5rem', // 8px
      },
      colors: {
        'navy-blue': '#0F1C3F',
        'sunrise-gold': '#FFC72C',
        'warm-orange': '#FF8A00',
        'light-silver': '#f8f9fa',
        'charcoal': '#333333',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
       
    },
  },
  plugins: [],
}

