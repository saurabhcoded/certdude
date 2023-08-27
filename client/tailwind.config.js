/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

