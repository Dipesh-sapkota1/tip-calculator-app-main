 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",
  "./src/input.css",],
  theme: {
    extend: {
      colors: {
        customCyan: {
          400: 'hsl(172, 67%, 45%)',
          900: 'hsl(183, 100%, 15%)', 
          grey:{
            900: 'hsl(186, 14%, 43%)',
            500: 'hsl(184, 14%, 56%)',
            200: 'hsl(185, 41%, 84%)',
            100: 'hsl(189, 41%, 97%)',
          } 
        }
      },
      fontFamily:{
        space:["Space Mono", "monospace"]
      }
    },
  },
  plugins: [],
}

