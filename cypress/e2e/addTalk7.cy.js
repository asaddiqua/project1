describe('Create and Edit Talks', () => {
    before(() => {
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
  
    it('Create Event and Talks', () => {
        cy.get('.pull-right > .btn')
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
        cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
    });
    it('Edit Talks', () => {
        // Access the configuration values
        const {
          talkStartDateTuesday,
          talkStartDateWednesday,
          talkStartDateThursday,
          halfHourDifference
        } = Cypress.env();
    
        // Function to generate talk titles
        function generateTalkTitle(day, index) {
          return `${day}${index}`;
        }
    
        // Function to edit talk date and time
        function editTalkDateTime(day, index, startDate, timeDifference) {
          const talkTitle = generateTalkTitle(day, index);
    
          cy.contains('.talk-title', talkTitle)
            .parents('.talk-item')
            .find('.glyphicon-edit')
            .click();
    /*it('Edit Talks', () => {
      // Access the configuration values
      const {
        talkStartDateTuesday,
        talkStartDateWednesday,
        talkStartDateThursday,
        halfHourDifference
      } = Cypress.env();
  
      // Function to generate talk titles
      function generateTalkTitle(day, index) {
        return `${day}${index}`;
      }
  
      // Function to edit talk date and time
      function editTalkDateTime(talkTitle, startDate, timeDifference) {
        cy.contains('.talk-title', talkTitle)
          .parents('.talk-item')
          .find('.glyphicon-edit')
          .click();*/
  
        // Update start date
        cy.get('#startDate').click().clear().type(startDate);
        
  
        // Update start time with half an hour difference
        cy.get('#startTime').then(($startTime) => {
          const startTime = $startTime.val();
          const updatedStartTime = Cypress.moment(startTime, 'HH:mm')
            .add(timeDifference, 'minutes')
            .format('HH:mm');
          cy.get('#startTime').clear().type(updatedStartTime);
        });
        cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
        cy.get('#workflowstate').select('Live');
        cy.get('#startDate').click().clear().type('16-January-2024');
        cy.get('#endDate').click().clear().type('16-January-2024');
        cy.get('.hours').eq(1).clear().type('12');
        cy.get('.minutes').eq(1).clear().type('00');
        cy.get('.hours').eq(4).clear().type('13');
        cy.get('.minutes').eq(4).clear().type('00');
        cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();

      }
  
      // Edit talks for Tuesday
      for (let i = 1; i <= 5; i++) {
        const talkTitle = generateTalkTitle('Tuesday', i);
        editTalkDateTime(talkTitle, talkStartDateTuesday, i * halfHourDifference);
      }
  
      // Edit talks for Wednesday
      for (let i = 1; i <= 5; i++) {
        const talkTitle = generateTalkTitle('Wednesday', i);
        editTalkDateTime(talkTitle, talkStartDateWednesday, i * halfHourDifference);
      }
  
      // Edit talks for Thursday
      for (let i = 1; i <= 5; i++) {
        const talkTitle = generateTalkTitle('Thursday', i);
        editTalkDateTime(talkTitle, talkStartDateThursday, i * halfHourDifference);
      }
    });
  });
  