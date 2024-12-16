/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2D2B2E',
          main: '#1A1A1D',
          dark: '#121214',
          text: '#E6E4E7',
        },
        accent: {
          light: '#9747FF',
          main: '#7635DB',
          dark: '#5D2BA6',
        },
        status: {
          success: '#4CAF50',
          error: '#F44336',
          warning: '#FF9800',
        },
        background: {
          light: '#1E1E24',
          main: '#16161A',
          dark: '#121214',
        },
        border: {
          light: '#2D2B2E',
          main: '#1E1E24',
        },
      },
      fontFamily: {
        belgeri: ['Belgeri', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #1A1A1D 0%, #121214 100%)',
      },
    },
  },
  plugins: [],
};