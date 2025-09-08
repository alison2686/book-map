/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // keep if you still have files under /src
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: '#27272a',
        vividOrange: '#EBAD0E',
        sky: '#5DADE2',
        eventYellow: '#eab308',
        navBorder: '#272222',
      },
      backgroundImage: {
        'comic-background': "url('/images/yellow-comic.png')",
      },
      // 👇 Fonts: map next/font variables -> Tailwind utilities
      fontFamily: {
        // Inter becomes default via `font-sans`
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Use `font-bangers` where you want the display font
        bangers: ['var(--font-bangers)', 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.layout-grid': {
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          height: '100vh',
        },
        '.content': {
          paddingTop: '80px',
        },
        '.comic-panel': {
          backgroundColor: 'white',
          borderWidth: '3px',
          borderColor: 'black',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.navbar-fixed': {
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '80px',
          zIndex: '50',
        },
        '.relative-container': { position: 'relative', overflow: 'visible' },
        '.icon-container': { position: 'absolute' },

        // Map / icon styles
        '.map-icon': {
          position: 'absolute',
          color: 'black',
          opacity: '0.7',
          transition: 'transform 0.2s ease-in-out',
          cursor: 'pointer',
          border: '3px solid #17202A',
          borderRadius: '30%',
          padding: '0.25rem',
          backgroundColor: '#FFFFFF',
          fontSize: '0.75rem',
          justifyContent: 'center',
          '&:hover': { transform: 'scale(1.25)', opacity: '1' },
          '@screen lg': { fontSize: '1.75rem' },
        },

        // Text overlays
        '.text-overlay-full': {
          position: 'static',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem',
          backgroundColor: 'rgba(0, 0, 0)',
          color: '#FFFFFF',
        },
        '.text-overlay-btm-left-sm': {
          position: 'absolute',
          bottom: '0.5rem',
          left: '0.5rem',
          width: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#FFFFFF',
          borderRadius: '0.25rem',
        },
        '.text-overlay-btm-left-lg': {
          position: 'absolute',
          bottom: '0.5rem',
          left: '0.5rem',
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#FFFFFF',
          borderRadius: '0.25rem',
        },
        '.text-overlay-top-right': {
          position: 'absolute',
          top: '0.5rem',
          right: '0.75rem',
          width: '35%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#FFFFFF',
          borderRadius: '0.25rem',
        },
        '.text-overlay-top': {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#FFFFFF',
          borderRadius: '0.25rem',
        },

        // Backgrounds / textures
        '.comic-bg': {
          backgroundColor: '#5DADE2', // light blue
          backgroundImage:
            'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px), radial-gradient(circle, rgba(0, 0, 0, 0.1) 2px, transparent 1px)',
          backgroundSize: '10px 10px',
          backgroundPosition: '0 0, 5px 5px',
        },
        '.comic-dots': {
          backgroundColor: '#27272a', // grayish black
          backgroundImage:
            'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px), radial-gradient(circle, rgba(0, 0, 0, 0.1) 2px, transparent 1px)',
          backgroundSize: '10px 10px',
          backgroundPosition: '0 0, 5px 5px',
        },
        '.map-dots': {
          backgroundColor: '#8B0000', // Dark red
          backgroundImage:
            'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px), radial-gradient(circle, rgba(0, 0, 0, 0.1) 2px, transparent 1px)',
          backgroundSize: '10px 10px',
          backgroundPosition: '0 0, 5px 5px',
        },

        // Titles (great with font-bangers)
        '.comic-title': {
          fontSize: '6rem',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#305784',
          letterSpacing: '0.05em',
          textShadow: `
            -1px -1px 0 #5DADE2,
            1px -1px 0 #5DADE2,
            -1px 1px 0 #5DADE2,
            1px 1px 0 #5DADE2
          `,
          lineHeight: '1.2',
          marginBottom: '1rem',
        },
        '.comic-cover-title': {
          fontSize: '3rem',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#305784',
          letterSpacing: '0.05em',
          textShadow: `
            -1px -1px 0 #5DADE2,
            1px -1px 0 #5DADE2,
            -1px 1px 0 #5DADE2,
            1px 1px 0 #5DADE2
          `,
          lineHeight: '1.2',
          marginBottom: '1rem',
        },

        // Body copy tweak used in hero
        '.hero-text': {
          maxWidth: '38rem',
          fontSize: '1.2rem',
          lineHeight: '1.625rem',
          letterSpacing: '0.075em',
          textAlign: 'left',
          padding: '0.5rem',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
