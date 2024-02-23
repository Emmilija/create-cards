/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/*.{js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#4C00C2',
      secondary: '#32007E',
      tertiary: '#3B058E',
      light: '#E5E5E5',
      white: '#FFFFFF',
      gray: '#D3D8E1',
      'gray-dark': '#798291',
      'gray-darker': '#444E5D',
      black: '#1A212C',
      success: '#19AC51',
      error: '#FC484C',
    },
    fontFamily: {
      sans: ['Circular Pro', "sans-serif" ],
    },
    extend: {
      spacing: {
        '4': '1rem',  
        '8': '2rem',   
        '16': '4rem', 
        '24': '6rem',  
        '32': '8rem',  
        '40': '10rem', 
        '48': '12rem', 
        '56': '14rem',
      },
      borderRadius: {
        '16': '16px',
        '24': '24px',
        '100': '100px',
      },
      fontSize: {
        '10': '10px',
        '14': '14px',
        '16': '16px',
        '24': '24px',
        '30': '30px',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};