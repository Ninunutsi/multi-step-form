/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#374151',
        primary: '#334155',
        secondary: '#4b5563',
        accent: '#0284c7',
        light_accent: '#0ea5e9',
      },
    },
  },
  plugins: [],
}
