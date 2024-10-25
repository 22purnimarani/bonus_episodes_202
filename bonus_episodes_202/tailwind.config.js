// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        terracotta: '#E2725B',
        sage: '#B2AC88',
        sand: '#D2B48C',
        ivory: '#FFFFF0',
        burntOrange: '#C65D40',
        dustyRose: '#D8A7A1',
        turquoise: '#40E0D0',
        chocolateBrown: '#3B2B1D',
        oliveGreen: '#6B8E23',
      },
      fontFamily: {
        'fligen': ['"Fligen"', 'sans-serif'],
        'yeseva': ['"Yeseva One"', 'serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'amatic': ['"Amatic SC"', 'cursive'],
      },
    },

  },
  plugins: [],
};
