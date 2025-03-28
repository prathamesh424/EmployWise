/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark-primary': '#000000',
        'dark-secondary': '#111111',
        'light-primary': '#ffffff',
        'light-secondary': '#f3f4f6',
      },
      textColor: {
        'dark-primary': '#ffffff',
        'dark-secondary': '#e5e7eb',
        'light-primary': '#000000',
        'light-secondary': '#374151',
      },
      borderColor: {
        'dark-border': '#333333',
        'light-border': '#e5e7eb',
      }
    }
  },
  plugins: [],
}

