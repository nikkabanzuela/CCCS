/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        primary: "#51E9EF",
        secondary: '#39B0A8',
        dark: '#1C1C1C',
        gray: '#5C5B5B',
        DarkGray: "#707070",

      },

      fontFamily: {
       montserrat:['Montserrat','san-serif']
      },
      fontSize: {
        huge: 'clamp(3rem, 6vw, 3rem)',
      },


    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      // '2xl': '1496px',
      },
    }

  },
  plugins: [],
}
