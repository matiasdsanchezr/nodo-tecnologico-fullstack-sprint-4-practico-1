const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-background": "linear-gradient(45deg, #1d50afE0, #1d50afE0)",
        "secondary-background": "linear-gradient(25deg, #1d50afE0, #1d50afE0)",
      },
      colors: {
        primary: "#1d50af",
        secondary: "#ffe3dc",
      },
      fontFamily: {
        sans: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
