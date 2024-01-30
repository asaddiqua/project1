const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //baseurl
    },
  },
});
// cypress.json
{
  "env"; {
    "talkStartDateTuesday"; "2024-01-23", // Set your desired start date for Tuesday talks
    "talkStartDateWednesday"; "2024-01-24", // Set your desired start date for Wednesday talks
    "talkStartDateThursday"; "2024-01-25", // Set your desired start date for Thursday talks
    "halfHourDifference"; 30 // The difference in minutes for half an hour
  }
}

