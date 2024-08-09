/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom': ['max(4.5vw, 22px)', '1.1'],
        'custom-2': ['max(1vw, 13px)'],
        'custom-3': ['max(1.4vw, 16px)', '1.4'],
        'custom-4': ['max(23vw, 330px)'], // Added missing closing parenthesis and line height
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fade: 'fade 0.5s',
      },
    },
  },
  plugins: [],
}