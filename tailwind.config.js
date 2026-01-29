module.exports = {
  content: [
    "./templates/**/*.twig",
    "./**/*.yml",
    "../../modules/custom/**/*.twig"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          green: "#00ff9c",
          blue: "#00bfff"
        }
      }
    }
  },
  plugins: []
};
