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
          'background-color': 'white',
          'border-width': '2px',
          'border-color': 'black',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'border-radius': '0.175rem',
        },
        '.map-icon': {
          position: 'absolute',
          color: 'black',
          opacity: '0.7',
          transition: 'transform 0.2s ease-in-out',
          cursor: 'pointer',
          border: '3px solid #17202A ', // Tailwind red-500
          'border-radius': '9999px', // Fully rounded
          padding: '0.5rem', // Tailwind p-1 equivalent
          backgroundColor: '#FFFFFF',
          '&:hover': {
            transform: 'scale(1.25)',
            opacity: '1',
          },
        },
        '.text-overlay-full': {
          position: 'absolute',
          bottom: '0', // Move down from the top edge
          left: '0', // Move left from the right edge
          width: '100%',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          padding: '0.75rem', // Tailwind p-4 equivalent
          'background-color': 'rgba(0, 0, 0, 0.7)', // Tailwind bg-black bg-opacity-70 equivalent
          color: '#FFFFFF', // Tailwind text-white equivalent
          'border-radius': '0.5rem',
        },
        '.text-overlay-btm-left-sm': {
          position: 'absolute',
          bottom: '0.5rem', // Move down from the top edge
          left: '0.5rem', // Move left from the right edge
          width: '25%',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          padding: '0.75rem', // Tailwind p-4 equivalent
          'background-color': 'rgba(0, 0, 0, 0.7)', // Tailwind bg-black bg-opacity-70 equivalent
          color: '#FFFFFF', // Tailwind text-white equivalent
          'border-radius': '0.75rem',
        },
        '.text-overlay-btm-left-lg': {
          position: 'absolute',
          bottom: '0.5rem', // Move down from the top edge
          left: '0.5rem', // Move left from the right edge
          width: '50%',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          padding: '0.75rem', // Tailwind p-4 equivalent
          'background-color': 'rgba(0, 0, 0, 0.7)', // Tailwind bg-black bg-opacity-70 equivalent
          color: '#FFFFFF', // Tailwind text-white equivalent
          'border-radius': '0.75rem',
        },
        '.text-overlay-top-right': {
          position: 'absolute',
          top: '0.5rem', // Move down from the top edge
          right: '0.75rem', // Move left from the right edge
          width: '55%',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          padding: '0.75rem', // Tailwind p-4 equivalent
          'background-color': 'rgba(0, 0, 0, 0.7)', // Tailwind bg-black bg-opacity-70 equivalent
          color: '#FFFFFF', // Tailwind text-white equivalent
          'border-radius': '0.75rem',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
