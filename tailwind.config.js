/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {},
        secondary: {},
        tertiary: {},
      },
      fontFamily: {
        main: ["Nunito"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
