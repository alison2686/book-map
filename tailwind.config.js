/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Make sure this path covers all your files using Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        seafoam: '#305784', // hero bg
        peach: '#EBAD0E', // navbar
        sky: '#5DADE2', // A light blue
        comic: '#fde047', // A bright yellow, good for backgrounds or highlights
        border: '#272222', // navbar bottom border
      },
      backgroundImage: {
        'comic-background': "url('/images/yellow-comic.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.comic-panel': {
          'col-span': '2',
          'row-span': '4',
          'background-color': 'white',
          'border-width': '2px',
          'border-color': 'black',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'border-radius': '0.175rem',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
