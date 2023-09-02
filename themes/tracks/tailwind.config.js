/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    colors: {
      'text': '#e7ebf9',
      'background': '#091124',
      'primary': '#1a2e65',
      'secondary': '#0c142d',
      'accent': '#3860cc'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

