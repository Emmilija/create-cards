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
      sans: ['Circular', 'sans-serif'],
    },
    extend: {
      spacing: {
        '4': '1rem',   // Equivalent to 4px
        '8': '2rem',   // Equivalent to 8px
        '16': '4rem',  // Equivalent to 16px
        '24': '6rem',  // Equivalent to 24px
        '32': '8rem',  // Equivalent to 32px
        '40': '10rem', // Equivalent to 40px
        '48': '12rem', // Equivalent to 48px
        '56': '14rem', // Equivalent to 56px
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