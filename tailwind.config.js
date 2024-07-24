 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",
  "./src/input.css",],
  theme: {
    extend: {
      colors: {
        cyan: {
          strong: 'hsl(172, 67%, 45%)',
          'very-dark': 'hsl(183, 100%, 15%)',
          'dark-grayish': 'hsl(186, 14%, 43%)',
          'grayish': 'hsl(184, 14%, 56%)',
          'light-grayish': 'hsl(185, 41%, 84%)',
          'very-light-grayish': 'hsl(189, 41%, 97%)',
        },
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        space:["Space Mono", "monospace"]
      }
    },
  },
  plugins: [],
}

