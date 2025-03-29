module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,ts}", // Путь к тестам
    baseUrl: "http://localhost:3000", // Меняй на свой адрес
  },
});
