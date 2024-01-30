// Function to generate a unique talk title
function generateTalkTitle(day, index) {
    return `${day}${index}`;
  }
  
  // Function to create a talk with specified date and time
  function createTalk(day, talkTitle, startDate, startTime, endDate, endTime) {
    cy.get('.pull-right > .btn');
    cy.get('.btn > .glyphicon').click();
    cy.get('#title').type(talkTitle);
    cy.get('[id*="taTextElement"]').click().type('Talk');
    cy.get('#seoabstract').type('Talk');
    cy.get('#talktype').select(1);
    cy.get('#language').select('English').invoke('change');
    cy.get('#workshopShortLabel').type('Talk');
    cy.wait(1000);
    cy.get('#talkqualifications')
    cy.get('#editions').select('W-JAX-INSTANCE1');
    cy.get('#addmanuallslug0').click();
    cy.get('select').eq(7).select(1);
    cy.get('#secondarytracks').select('Web Development (JAX)');
    cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
    cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
    cy.get('#room').select('Room 1');
    cy.get('#finalapproval').click();
    cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({ force: true });
    cy.wait(5000);
    cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
  }
  
  // Function to edit a talk without changing the title and specifying new date and time
  function editTalk(talkTitle, newStartDate, newStartTime, newEndDate, newEndTime) {
    cy.wait(5000);
    const editButtonSelector = '.edit-button';
  
    cy.get('.glyphicon-edit').each(($talkTitle, index) => {
      cy.wrap($talkTitle).click();
      
    });
  }
  
  beforeEach(() => {
    cy.visit('http://conf2016qa.sandsmedia.com'); 
// Enter username and password and click on signin 
    cy.get('body > header > div > nav > ul:nth-child(3) > li:nth-child(3) > a').click();
    cy.get('#email').type('asaddiqua@sandsmedia.com');
    cy.get('#password').type('Saddiqua007');
    cy.get('body > section > section > section > section > div > div > div > form > fieldset > div.text-center.form-group.ng-binding > button').click();
    cy.get(':nth-child(3) > .dropdown-toggle').click();
    cy.get('a[href="/events/current"').click();
    cy.wait(10000);
    cy.get('h4').contains('2nd Event created by automated script').click();
  });
  
  describe('Add Talks', () => {
    it('Add Talks', () => {
      const days = ['Tuesday', 'Wednesday', 'Thursday'];
      for (const day of days) {
        for (let i = 1; i <= 5; i++) {
          const talkTitle = generateTalkTitle(day, i);
          createTalk(day, talkTitle);
          editTalk(talkTitle);
        }
      }
    });
  });
  
  describe('Add workshops', () => {
    it('Add Workshops', () => {
        function createTalk(day, talkTitle, startDate, startTime, endDate, endTime) {
            cy.get('.pull-right > .btn')
            cy.get('.btn > .glyphicon').click();
            cy.get('#title').type(talkTitle);
            cy.get('[id*="taTextElement"]').click().type('Talk');
            cy.get('#seoabstract').type('Talk');
            cy.get('#talktype').select(2);
            cy.get('#language').select('English').invoke('change');
            cy.get('#workshopShortLabel').type('Talk');
            cy.wait(1000);
            cy.get('#talkqualifications')
            cy.get('#editions').select('W-JAX-INSTANCE1');
            cy.get('#addmanuallslug0').click();
            cy.get('select').eq(7).select(1);
            cy.get('#secondarytracks').select('Web Development (JAX)');
            cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
            cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
            cy.get('#room').select('Room 1');
            cy.get('#finalapproval').click();
            cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({ force: true });
            cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
    
          }
      
          // Function to edit a talk without changing the title and specifying new date and time
          function editTalk(talkTitle, newStartDate, newStartTime, newEndDate, newEndTime) {
            cy.wait(5000);
            const editButtonSelector = '.edit-button';
      
            cy.get('.glyphicon-edit').each(($talkTitle, index) => {
              cy.wrap($talkTitle).click();
      
              cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
              cy.get('#workflowstate').select('Live');
              cy.get('#startDate').click().clear().type('16-January-2024');
              cy.get('#endDate').click().clear().type('16-January-2024');
              cy.get('.hours').eq(1).clear().type('12');
              cy.get('.minutes').eq(1).clear().type('00');
              cy.get('.hours').eq(4).clear().type('13');
              cy.get('.minutes').eq(4).clear().type('00');
              cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
      
              cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
            });
          }
      // Define dates and times in your config file
      const config = Cypress.config();
      const workshopDates = {
        monday: config.mondayWorkshopDate,
        friday: config.fridayWorkshopDate,
      };
      
      const talkTimes = {
        tuesday: [
          { startTime: { hours: 9, minutes: 0 }, endTime: { hours: 9, minutes: 30 } },
          { startTime: { hours: 10, minutes: 0 }, endTime: { hours: 10, minutes: 30 } },
          { startTime: { hours: 11, minutes: 0 }, endTime: { hours: 11, minutes: 30 } },
          { startTime: { hours: 12, minutes: 0 }, endTime: { hours: 12, minutes: 30 } },
          { startTime: { hours: 13, minutes: 0 }, endTime: { hours: 13, minutes: 30 } },
        ],
        // Add timings for Wednesday and Thursday talks as needed
        wednesday: [
            { startTime: { hours: 9, minutes: 0 }, endTime: { hours: 9, minutes: 30 } },
            { startTime: { hours: 10, minutes: 0 }, endTime: { hours: 10, minutes: 30 } },
            { startTime: { hours: 11, minutes: 0 }, endTime: { hours: 11, minutes: 30 } },
            { startTime: { hours: 12, minutes: 0 }, endTime: { hours: 12, minutes: 30 } },
            { startTime: { hours: 13, minutes: 0 }, endTime: { hours: 13, minutes: 30 } },
          ],
          thursday: [
            { startTime: { hours: 9, minutes: 0 }, endTime: { hours: 9, minutes: 30 } },
            { startTime: { hours: 10, minutes: 0 }, endTime: { hours: 10, minutes: 30 } },
            { startTime: { hours: 11, minutes: 0 }, endTime: { hours: 11, minutes: 30 } },
            { startTime: { hours: 12, minutes: 0 }, endTime: { hours: 12, minutes: 30 } },
            { startTime: { hours: 13, minutes: 0 }, endTime: { hours: 13, minutes: 30 } },
          ],
      };
      
      // Create Monday workshop
      createTalk('Monday', 'Monday Workshop', workshopDates.monday, { hours: 8, minutes: 30 }, workshopDates.monday, { hours: 16, minutes: 30 });
      
      // Create Tuesday talks
      const tuesdayTalks = talkTimes.tuesday;
      for (let i = 1; i <= 5; i++) {
        const talkTitle = generateTalkTitle('Tuesday', i);
        createTalk('Tuesday', talkTitle, workshopDates.tuesday, tuesdayTalks[i - 1].startTime, workshopDates.tuesday, tuesdayTalks[i - 1].endTime);
        editTalk(talkTitle, workshopDates.tuesday, tuesdayTalks[i - 1].startTime, workshopDates.tuesday, tuesdayTalks[i - 1].endTime);
      }
    });
  });
  
/*beforeEach(() =>
{
  //Cypress.on('fail', (error, runnable) => {
    // Set a custom flag to track if a test has failed
    //Cypress.runner.stop();
  //});
  cy.visit('http://conf2016qa.sandsmedia.com'); 
// Enter username and password and click on signin 
    cy.get('body > header > div > nav > ul:nth-child(3) > li:nth-child(3) > a').click();
    cy.get('#email').type('asaddiqua@sandsmedia.com');
    cy.get('#password').type('Saddiqua007');
    cy.get('body > section > section > section > section > div > div > div > form > fieldset > div.text-center.form-group.ng-binding > button').click();
    cy.get(':nth-child(3) > .dropdown-toggle').click();
    cy.get('a[href="/events/current"').click();
    cy.wait(10000);
    cy.get('h4').contains('2nd Event created by automated script').click();
    //cy.get('a[href="/events/6585ac8cd03ca4cc77e524da/talks"]').click();
})
describe('Add Talks', () => {
    it('Add Talks', () => {
        function generateTalkTitle(day, index) {
            return `${day}${index}`;
          }
          const days = ['Tuesday', 'Wednesday', 'Thursday'];
          for (const day of days) {
            for (let i = 1; i <= 5; i++) {
              const talkTitle = generateTalkTitle(day, i);
              createTalk(day, talkTitle);
              editTalk(talkTitle);
            }
          }
        });
        
        describe('Add workshops', () => {
          it('Add Workshops', () => {
            // Function to create a talk with specified date and time
            function createTalk(day, talkTitle, startDate, startTime, endDate, endTime) {
              cy.get('.pull-right > .btn')
              cy.get('.btn > .glyphicon').click();
              cy.get('#title').type(talkTitle);
              cy.get('[id*="taTextElement"]').click().type('Talk');
              cy.get('#seoabstract').type('Talk');
              cy.get('#talktype').select(2);
              cy.get('#language').select('English').invoke('change');
              cy.get('#workshopShortLabel').type('Talk');
              cy.wait(1000);
              cy.get('#talkqualifications')
              cy.get('#editions').select('W-JAX-INSTANCE1');
              cy.get('#addmanuallslug0').click();
              cy.get('select').eq(7).select(1);
              cy.get('#secondarytracks').select('Web Development (JAX)');
              cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
              cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
              cy.get('#room').select('Room 1');
              cy.get('#finalapproval').click();
              cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({ force: true });
              cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
      
            }
        
            // Function to edit a talk without changing the title and specifying new date and time
            function editTalk(talkTitle, newStartDate, newStartTime, newEndDate, newEndTime) {
              cy.wait(5000);
              const editButtonSelector = '.edit-button';
        
              cy.get('.glyphicon-edit').each(($talkTitle, index) => {
                cy.wrap($talkTitle).click();
        
                cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
                cy.get('#workflowstate').select('Live');
                cy.get('#startDate').click().clear().type('16-January-2024');
                cy.get('#endDate').click().clear().type('16-January-2024');
                cy.get('.hours').eq(1).clear().type('12');
                cy.get('.minutes').eq(1).clear().type('00');
                cy.get('.hours').eq(4).clear().type('13');
                cy.get('.minutes').eq(4).clear().type('00');
                cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
        
                cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
              });
            }
        // Define dates and times in your config file
        const config = Cypress.config();
        const workshopDates = {
          monday: config.mondayWorkshopDate,
          friday: config.fridayWorkshopDate,
        };
        
        const talkTimes = {
          tuesday: [
            { startTime: { hours: 9, minutes: 0 }, endTime: { hours: 9, minutes: 30 } },
            { startTime: { hours: 10, minutes: 0 }, endTime: { hours: 10, minutes: 30 } },
            { startTime: { hours: 11, minutes: 0 }, endTime: { hours: 11, minutes: 30 } },
            { startTime: { hours: 12, minutes: 0 }, endTime: { hours: 12, minutes: 30 } },
            { startTime: { hours: 13, minutes: 0 }, endTime: { hours: 13, minutes: 30 } },
          ],
          // Add timings for Wednesday and Thursday talks as needed
          wednesday: [
              { startTime: { hours: 9, minutes: 0 }, endTime: { hours: 9, minutes: 30 } },
              { startTime: { hours: 10, minutes: 0 }, endTime: { hours: 10, minutes: 30 } },
              { startTime: { hours: 11, minutes: 0 }, endTime: { hours: 11, minutes: 30 } },
              { startTime: { hours: 12, minutes: 0 }, endTime: { hours: 12, minutes: 30 } },
              { startTime: { hours: 13, minutes: 0 }, endTime: { hours: 13, minutes: 30 } },
            ],
            thursday: [
              { startTime: { hours: 9, minutes: 0 }, endTime: { hours: 9, minutes: 30 } },
              { startTime: { hours: 10, minutes: 0 }, endTime: { hours: 10, minutes: 30 } },
              { startTime: { hours: 11, minutes: 0 }, endTime: { hours: 11, minutes: 30 } },
              { startTime: { hours: 12, minutes: 0 }, endTime: { hours: 12, minutes: 30 } },
              { startTime: { hours: 13, minutes: 0 }, endTime: { hours: 13, minutes: 30 } },
            ],
        };
        
        // Create Monday workshop
        createTalk('Monday', 'Monday Workshop', workshopDates.monday, { hours: 8, minutes: 30 }, workshopDates.monday, { hours: 16, minutes: 30 });
        
        // Create Tuesday talks
        const tuesdayTalks = talkTimes.tuesday;
        for (let i = 1; i <= 5; i++) {
          const talkTitle = generateTalkTitle('Tuesday', i);
          createTalk('Tuesday', talkTitle, workshopDates.tuesday, tuesdayTalks[i - 1].startTime, workshopDates.tuesday, tuesdayTalks[i - 1].endTime);
          editTalk(talkTitle, workshopDates.tuesday, tuesdayTalks[i - 1].startTime, workshopDates.tuesday, tuesdayTalks[i - 1].endTime);
        }


    });
});

    //})

});*/