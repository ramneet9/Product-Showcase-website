/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#b9dcff',
          300: '#8cc6ff',
          400: '#55a6ff',
          500: '#2b84ff',
          600: '#1766e6',
          700: '#1453b8',
          800: '#153f87',
          900: '#142f62',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(43,132,255,0.35)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
