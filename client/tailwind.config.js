module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    
    screens: {
      'sm': '340px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1536px',
    },

    extend: {
      backgroundImage:{
        'kitchen-image':'url("./components/assets/kitchen.png")',
        'concept-image':'url("./components/assets/concept.jpg")'
      },
    },
  },
  plugins: [],
}
