/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'bgMobile': "url('/bg-intro-mobile.png')",
        'bgDesktop': "url('/bg-intro-desktop.png')"
      }
    },
  },
  plugins: [],
}
