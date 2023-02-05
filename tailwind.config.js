const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        card: 'radial-gradient(63.94% 63.94% at 50% 0%, rgb(38, 38, 44) 0%, rgba(38, 38, 44, 0) 78.13%)',
        'background-gradient':
          'radial-gradient(52.56% 52.56% at 50% 117.61%,#1c1c21 0,rgba(28,28,33,0) 100%),radial-gradient(63.94% 63.94% at 50% 0,#1c1c21 0,rgba(28,28,33,0) 78.13%)',
        stars:
          'radial-gradient(50% 50% at 50% 50%, rgb(0, 0, 0) 24.68%, rgb(255, 255, 255) 41.49%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 72.92%, rgb(255, 255, 255) 89.06%, rgb(0, 0, 0) 96.88%)',
        line: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.12) 100%)',
        'glow-line':
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.12) 100%), linear-gradient(90deg, rgba(229, 71, 255, 0) 36.27%, rgb(255, 71, 149) 71.37%, rgb(255, 204, 71) 92.98%)',
        graydient:
          'radial-gradient(100% 100% at 56.63% 100%, rgb(236, 236, 238) 0%, rgb(75, 75, 88) 100%)',
        'codesnap-gradient':
          'linear-gradient(90.75deg, rgb(255, 215, 112) 8.81%, rgb(255, 112, 172) 29.16%, rgb(235, 112, 255) 49.51%, rgb(158, 112, 255) 69.86%, rgb(112, 184, 255) 90.2%)',
        'tick-gradient':
          'radial-gradient(597.47% 265.62% at 50% 0%, rgba(31, 255, 120, 0.72) 0%, rgba(31, 255, 120, 0) 50.48%)',
      },
    },
  },
  plugins: [],
}
