/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'], 
        anderson: ['Anderson Grotesk', 'sans-serif'],
        poppins:["Poppins", 'sans-serif']
      },
      dropShadow: {
        'btn': '0 25px 25px rgba(168, 22, 75, 0.15)',
      }
    },
    
  },
  plugins: [],
}