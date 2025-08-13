const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Você pode adicionar eventos aqui se quiser
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://testpages.herokuapp.com/styled/calculator' // ajuste conforme seu projeto
    screenshotOnRunFailure: true,
    video: true
  },
})
