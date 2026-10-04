/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg:     '#0c1022',
        bgalt:  '#19212e',
        brand: {
          blue:  '#3498db',
          green: '#2ecc71',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'grad-br': 'linear-gradient(45deg, #3498db, #2ecc71)',
        'grad-r':  'linear-gradient(to right, #3498db, #2ecc71)',
        'grad-bl': 'linear-gradient(45deg, #2ecc71, #3498db)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-5px)' },
        },
        uptodown: {
          from: { transform: 'translateY(-100px)', opacity: '0' },
          to:   { transform: 'translateY(0)',      opacity: '1' },
        },
        lefttoright: {
          from: { transform: 'translateX(-100px)', opacity: '0' },
          to:   { transform: 'translateX(0)',       opacity: '1' },
        },
        downtoup: {
          from: { transform: 'translateY(100px)', opacity: '0' },
          to:   { transform: 'translateY(0)',     opacity: '1' },
        },
        circleRotate: {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float:        'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-med':  'float 4s ease-in-out infinite',
        uptodown:     'uptodown 1s ease both',
        lefttoright:  'lefttoright 1s ease both',
        downtoup:     'downtoup 1s ease both',
        'circle-rot': 'circleRotate 1s linear infinite',
        'circle-rot-fast': 'circleRotate 0.5s linear infinite',
      },
    },
  },
  plugins: [],
}
