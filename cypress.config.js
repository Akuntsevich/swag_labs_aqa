const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    supportFile: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here 
    },
  },
});
