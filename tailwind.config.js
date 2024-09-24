/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik-glitch-pop': ['"Rubik Glitch Pop"', 'system-ui'],
        'fredericka': ['"Fredericka the Great"', 'serif'],
      },
    },
  },
  plugins: [],
};
