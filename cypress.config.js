const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "watchForFileChanges": false,
    "defaultCommandTimeout": 4000,
    "reporter":"mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/report/mochawesome-report"  
     },
     setupNodeEvents(on, config) {
      // implement node event listeners here
     },
  },
});


