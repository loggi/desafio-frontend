const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
