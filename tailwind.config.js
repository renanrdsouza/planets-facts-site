/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'mobile': '23.438rem'
      },
      height: {
        'mobile': '59.375rem',
        'header-mobile': '4.25rem'
      },
      colors: {
        'background': '#070724'
      },
      backgroundImage: {
        'stars': "url('/assets/background-stars.svg')"
      },
      fontFamily: {
        "Antonio": "Antonio"
      }
    },
  },
  plugins: [],
}
