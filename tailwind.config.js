const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        orange: colors.orange,
      },
    },
  },
  variants: {},
  plugins: [],
};
