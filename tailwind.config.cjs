/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    ...defaultTheme,
    content: ["./node_modules/tw-elements/dist/js/**/*.js"],
    extend: {
      colors: {
        accent: "rgb(152, 204, 51)",
        linarogreen: "rgb(152, 204, 51)",
        "linaro-yellow": "#FFCE00",
        "linaro-purple": "#6715E8",
        grey: "#6B6B6B",
        background: "#222025",
        darker: "#1B181C",
        dark: "#222025",
      },
      backgroundImage: {
        "linaro-gradient":
          "linear-gradient(102deg, #FFCE00 -0.43%, #6715E8 95.75%)",
        "purple-gradient":
          "linear-gradient(180deg, rgba(103, 21, 232, 0.00) 0%, #420D90 44%, #420D90 55%, rgba(58, 12, 130, 0.00) 100%)",
        "border-gradient":
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, #545454 49%, rgba(0,0,0,0) 100%);",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "white",
            // enter default text styles here
          },
        },
      }),
      height: {
        128: "32rem",
      },
    },
    fontFamily: {
      sans: ["sofia-pro", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tw-elements/plugin.cjs"),
    require("tailwindcss-animated")
    // ...
  ],
};
