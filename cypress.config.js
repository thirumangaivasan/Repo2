const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "watchForFileChanges": false,
    "defaultCommandTimeout": 4000,
    reporter: 'cypress-mochawesome-reporter',
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "reportFilename": "[status]_[datetime]-[name]-report",
      "html": false,
      "autoOpen": true,
      "json": true,
     },
     setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
     },
  },
});


