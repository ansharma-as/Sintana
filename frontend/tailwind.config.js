
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
    },
  },
  plugins: [],
}
