/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xs' : {'min' : '250px' , 'max' : '449px'},
      'xs':{'min':'450px', 'max': '649px'},
      'sm': {'min': '650px', 'max': '767px'},
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max' : '1023px'},
      'xl': {'min': '1024px', 'max': '1279px'},
      '2xl': {'min': '1280px', 'max': '1535px'},
      '3xl': {'min': '1536px'},
    },
    extend: {},
  },
  plugins: [],
}