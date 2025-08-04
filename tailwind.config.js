/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text:     '#DDFFDC',    // soft greenish white
        primary:  '#7FED64',    // bright green
        box:      '#212525',    // dark gray box
        dark:     '#000000',    // black bg
      },
    },
  },
  plugins: [],
}