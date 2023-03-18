const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      white: "white",
      black: "#111111",
      lightgrey: "#AEAEAE",
      grey: "#2F2F2F",
      darkgrey: "#191919",
      red: "#CE1D1D",
      darkblue: "#1D2135",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hidden": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".timeline-hidden": {
          "&::-webkit-media-controls-timeline": {
            display: "none",
          },
        },
      });
    }),
  ],
};
