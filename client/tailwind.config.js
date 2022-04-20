module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],

  // variants: {
  //   display: ['children', 'default', 'children-first', 'children-last', 'chil']
  // }, 

  theme: {
    
    screens: {
      'sm': '340px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1536px',
    },

    extend: {
      zIndex: {
        '100': '100',
      },

      backgroundImage:{
        'kitchen-image':'url("./components/assets/kitchen.png")',
        'concept-image':'url("./components/assets/concept.jpg")',
        'devol-image': 'url("./components/assets/devol.jpg")'
      },
    },
  },
  plugins: [ 
    require('tailwindcss-children'), 
  ],
}
