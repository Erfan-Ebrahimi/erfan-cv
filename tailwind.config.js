/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem' 
        }
      },
      fontFamily: {
        "Dana" : "Dana",
        "DanaM" : "Dana Medium",
        "DanaB" : "Dana DemiBold",
        "Morabba" : "Morabba Light",
        "MorabbaM" : "Morabba Medium",
        "MorabbaB" : "Morabba Bold",
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
};
