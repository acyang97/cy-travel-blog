/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch", // add required value here
            p: {
              "text-align": "justify",
            },
          },
        },
      },
      colors: {
        primary: {
          100: "#2F3C7E",
        },
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
