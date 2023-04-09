/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/taskpane.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    sm: { min: "0px", max: "100px" },
    md: { min: "101", max: "500" },
    lg: { min: "501", max: "1279px" },

    // => @media (min-width: 1536px) { ... }
    // "2xl": { max: "1535px" },
    // // => @media (max-width: 1535px) { ... }

    // xl: { max: "1279px" },
    // // => @media (max-width: 1279px) { ... }

    // lg: { max: "946px" },
    // // => @media (max-width: 1023px) { ... }

    // md: { max: "349px" },
    // // => @media (max-width: 767px) { ... }

    // sm: { max: "60px" },
    // // => @media (max-width: 639px) { ... },
  },
};
