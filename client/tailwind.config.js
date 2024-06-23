/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#8e82b0",
        "secondry": "#bf1945",
        "tertiary": "#fc9826",
      },
    },
    screens: {
      
      lg:{max: "2400px"},

       sm: {max:"1000px" },

     
    },
  },
  plugins: [],
};