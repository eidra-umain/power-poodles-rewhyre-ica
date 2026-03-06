/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubrik: ['"ICA Rubrik"', 'sans-serif'],
        text: ['"ICA Text Ny"', 'sans-serif'],
      },
      colors: {
        blue: {
          50:  '#E0EDFF',
          100: '#C1DAFF',
          200: '#9AC2F5',
          300: '#6E9FDB',
          400: '#4A7CBF',
          500: '#2F5A9A',
          600: '#1E3065',
          700: '#182750',
          800: '#111D3B',
          900: '#0B1428',
        },
        green: {
          50:  '#E8F2E1',
          100: '#D0E4C3',
          200: '#AFD09C',
          300: '#8ABB76',
          400: '#69A456',
          500: '#498A3D',
          600: '#2D6E40',
          700: '#235834',
          800: '#1A4228',
          900: '#112D1C',
        },
        orange: {
          50:  '#FBCFBD',
          100: '#F7B9A0',
          200: '#F09E7D',
          300: '#E5805A',
          400: '#D4613C',
          500: '#B94A2E',
          600: '#9A3427',
          700: '#7C2A1F',
          800: '#5E2018',
          900: '#411610',
        },
        grey: {
          100: '#F5F5F5',
          200: '#ECEDED',
          300: '#C5C6C7',
          500: '#828386',
          700: '#45464B',
          900: '#1D1D20',
        },
      },
    },
  },
  plugins: [],
}
