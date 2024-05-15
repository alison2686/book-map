/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        seafoam: '#2980B9',
        peach: '#CB4335',
        sky: '#5DADE2',
      },
    },
  },
  plugins: [],
};
