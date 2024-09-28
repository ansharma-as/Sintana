
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        customGrey: '#475965',
        customYellow: '#E7C022'
        
      },
      fontFamily: {
        //sans: ['Inter', 'Arial', 'sans-serif'],
      },
      screens: {
        sm: { max: '760px' }, // @media (max-width: 760px)
        md: { min: '760px', max: '815px' }, // @media (min-width: 760px) and (max-width: 815px)
        lg: { min: '815px', max: '1280px' }, // @media (min-width: 815px) and (max-width: 1280px)
        xl: { min: '1280px' }, // This is the default Tailwind breakpoint for extra-large screens
      },
    },
  },
  plugins: [],
}
