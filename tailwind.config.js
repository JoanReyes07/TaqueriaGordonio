/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'sm': '400px',
        'md': '550px',
        'lg': '629px',
        'xl': '900px',
        '2xl': '1536px',
      },
      boxShadow: {
        'custom-green': '14px 11px 75px -50px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'Verde': '#329e58',
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-top-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-top-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-up": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadein: 'fade-in 1s ease-in-out 0.25s 1',
        fadeinleft: 'fade-in-left 1s ease-in-out 0.25s 1',
        fadeintopleft: 'fade-in-top-left 1s ease-out 0.25s 1',
        fadeintopright: 'fade-in-top-right 1s ease-out 0.25s 1',
        slideinup: 'slide-in-up 1s ease-in-out 0.25s 1',
        zoomIn: 'zoom-in 1s ease-out 0.25s 1',
      },
    },
  },
  plugins: [],
}

