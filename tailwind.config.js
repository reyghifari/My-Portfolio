/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light minimal theme
        ink: '#FFFFFF', // page background
        card: '#F6F6F3', // primary cards
        'card-2': '#ECECEC', // alternate / hover surface
        primary: '#1A1A1A', // dark accent (accent text + buttons)
        cream: '#141414', // main text (near-black)
      },
      fontFamily: {
        sans: ['Almarai', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
    },
  },
  plugins: [],
}
