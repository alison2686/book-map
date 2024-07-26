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
          backgroundColor: 'white',
          borderWidth: '2px',
          borderColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.175rem',
        },
        '.map-icon': {
          position: 'absolute',
          color: 'black',
          opacity: '0.7',
          transition: 'transform 0.2s ease-in-out',
          cursor: 'pointer',
          border: '3px solid #17202A ', // Tailwind red-500
          borderRadius: '9999px', // Fully rounded
          padding: '0.5rem', // Tailwind p-1 equivalent
          backgroundColor: '#FFFFFF',
          fontSize: '0.75rem',
          '&:hover': {
            transform: 'scale(1.25)',
            opacity: '1',
          },
          '@screen lg': {
            fontSize: '2rem',
          },
        },
        '.text-overlay-full': {
          position: 'absolute',
          bottom: '0', // Move down from the top edge
          left: '0', // Move left from the right edge
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem', // Tailwind p-4 equivalent
          backgroundColor: 'rgba(0, 0, 0)', // Tailwind bg-black bg-opacity-70 equivalent
          color: '#FFFFFF', // Tailwind text-white equivalent
          borderRadius: '0.5rem',
        },
        '.text-overlay-btm-left-sm': {
          position: 'absolute',
          bottom: '0.5rem',
          left: '0.5rem',
          width: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem', // Tailwind p-4 equivalent
          backgroundColor: 'rgba(0, 0, 0)', // Tailwind bg-black bg-opacity-70 equivalent
          color: '#FFFFFF', // Tailwind text-white equivalent
          borderRadius: '0.75rem',
        },
        '.text-overlay-btm-left-lg': {
          position: 'absolute',
          bottom: '0.5rem',
          left: '0.5rem',
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem', // Tailwind p-4 equivalent
          backgroundColor: 'rgba(0, 0, 0)', // Tailwind bg-black bg-opacity-70 equivalent
          color: '#FFFFFF', // Tailwind text-white equivalent
          borderRadius: '0.75rem',
        },
        '.text-overlay-top-right': {
          position: 'absolute',
          top: 'rem',
          right: '0.75rem',
          width: '35%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem', // Tailwind p-4 equivalent
          backgroundColor: 'rgba(0, 0, 0)', // Tailwind bg-black bg-opacity-70 equivalent
          color: '#FFFFFF', // Tailwind text-white equivalent
          borderRadius: '0.75rem',
        },
        '.text-overlay-top': {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem', // Tailwind p-4 equivalent
          backgroundColor: 'rgba(0, 0, 0)', // Tailwind bg-black bg-opacity-70 equivalent
          color: '#FFFFFF', // Tailwind text-white equivalent
          borderRadius: '0.75rem',
        },
        '.relative-container': {
          position: 'relative',
          overflow: 'visible',
        },
        '.icon-container': {
          position: 'absolute',
        },
        '.comic-bg': {
          backgroundColor: '#facc15' /* Tailwind's yellow-400 */,
          backgroundImage:
            'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px), radial-gradient(circle, rgba(0, 0, 0, 0.1) 2px, transparent 1px)',
          backgroundSize: '10px 10px',
          backgroundPosition: '0 0, 5px 5px',
        },
        '.hero-text': {
          maxWidth: '36rem',
          fontSize: '1.25rem',
          lineHeight: '1.625rem',
          letterSpacing: '0.025em',
          textAlign: 'left',
          marginTop: '1.25rem',
          padding: '1rem',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
