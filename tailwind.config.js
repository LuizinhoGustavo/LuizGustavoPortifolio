/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif']
      },
      colors: {
        backgroundColor: 'var(--background)',
        blueColorColor: 'var(--blue)',
        orangeColor: 'var(--orange)',
        grayColor: 'var(--gray)',
        blackColor: 'var(--black)',
        iconsColor: 'var(--icons)',
        textColor: 'var(--text)',
      },
    },
  },
  plugins: [],
}