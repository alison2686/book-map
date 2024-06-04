/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Make sure this path covers all your files using Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        seafoam: '#2980B9', // A vivid blue
        peach: '#CB4335', // A deep red
        sky: '#5DADE2', // A light blue
        comic: '#fde047', // A bright yellow, good for backgrounds or highlights
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
          'box-shadow': 'var(--shadow-2xl)',
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
