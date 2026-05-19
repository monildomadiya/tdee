/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  corePlugins: {
    preflight: false, // Prevents Tailwind from resetting global styles
  },
  theme: {
    extend: {
      colors: {
        primary: '#16a34a',
        dark: '#1e293b',
      }
    },
  },
  plugins: [],
}
