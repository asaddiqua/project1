beforeEach(() =>
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
describe('Add workshops', () => {
    it('Add Workshops', () => {
     
      //cy.get('h4').contains('2nd Event created by automated script').click();
      //cy.get('[style=""] > .list-element-internal-wrapper > .col-md-7 > [ui-sref="events.talk-view({ eventId: event._id, workflowStatesId: null } )"] > .list-group-item-heading').click();
     /*cy.get('.pull-right > .btn')
      cy.get('.btn > .glyphicon').click();
//cy.get('a[href="/events/6585ac8cd03ca4cc77e524da"').click();
//cy.get('body > section > section > section > ui-view > section > div:nth-child(2) > all-talks > section > div.row.ng-scope > nav > ul > li:nth-child(2)').click();
//cy.get('.pull-right > .btn')
//cy.get('.btn > .glyphicon').click();
//Monday Workshop name 
cy.get('#title').type('Monday Workshop');
cy.get('[id*="taTextElement"]').click().type('Monday Workshop');
cy.get('#seoabstract').type('Monday Workshop');
cy.get('#talktype').select(1);
cy.get('#language').select('English').invoke('change');
cy.get('#workshopShortLabel').type('Monday Workshop');
cy.get('[label="B level session"]').click();
cy.get('#editions').select('W-JAX-INSTANCE1');
cy.get('#addmanuallslug0').click();
cy.get('select').eq(7).select(1);
cy.get('#secondarytracks').select('Web Development (JAX)');
cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
cy.get('#room').select('Room 1');
cy.get('#finalapproval').click();
cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({force:true}); 
cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
cy.wait(1000);
//Friday workshop
//cy.get('h4').contains('2nd Event created by automated script').click();
cy.get('.btn > .glyphicon').eq(0).click();
//Friday Workshop name 
cy.get('#title').type('Friday Workshop');
cy.get('[id*="taTextElement"]').click().type('Friday Workshop');
cy.get('#seoabstract').type('Friday Workshop');
cy.get('#talktype').select(1);
cy.get('#language').select('English').invoke('change');
cy.get('#workshopShortLabel').type('Friday Workshop');
cy.get('[label="B level session"]').click();
cy.get('#editions').select('W-JAX-INSTANCE1');
cy.get('#addmanuallslug0').click();
cy.get('select').eq(7).select(1);
cy.get('#secondarytracks').select('Web Development (JAX)');
cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
cy.get('#room').select('Room 1');
cy.get('#finalapproval').click();
cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({force:true}); 
cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();*/

          // Define a function to generate talk titles
function generateTalkTitle(day, index) {
    return `${day}${index}`; // Add some randomness to avoid repetition
  }

// Loop through each day and create 5 talks
const days = ['Tuesday', 'Wednesday', 'Thursday'];

for (const day of days) {
  for (let i = 1; i <= 5; i++) {
    // Create a unique talk title
    const talkTitle = generateTalkTitle(day, i);

    // Create a talk
    createTalk(day, talkTitle);

    // Capture the newly created talk and perform edit
    editTalk(talkTitle);
  }
}

// Function to create a talk
function createTalk(day, talkTitle) {
  // Your existing code for creating a talk...
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

// Function to edit a talk without changing the title
function editTalk(talkTitle) {
    // Wait for the talk title to be present
    cy.wait(5000); 
    const editButtonSelector = '.edit-button';
// Get all elements with the class '.talk-title'
cy.get('.glyphicon-edit').each(($talkTitle, index) => {
  // Click on the associated edit button for each talk
  cy.wrap($talkTitle)
    //.parents('.talk-item') // Assuming the edit button is a sibling of the talk title
    //.find(editButtonSelector)
    .click();
  // For example, update some fields and save the changes
  cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
  cy.get('#workflowstate').select('Live');
  cy.get('#startDate').click().clear().type('16-January-2024');
  cy.get('#endDate').click().clear().type('16-January-2024');
  cy.get('.hours').eq(1).clear().type('12');
  cy.get('.minutes').eq(1).clear().type('00');
  cy.get('.hours').eq(4).clear().type('13');
  cy.get('.minutes').eq(4).clear().type('00');
  cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();


});


  // Put data in new fields with different data for each talk
  
  
}


  // Loop through each day and create 5 talks
  /*const days = ['Tuesday','Wednesday', 'Thursday'];
  
  for (const day of days) {
    for (let i = 1; i <= 5; i++) {
      // Update the title for each iteration
      const talkTitle = generateTalkTitle(day, i);
  
      cy.get('.pull-right > .btn')
      cy.get('.btn > .glyphicon').eq(0).click();
      cy.get('#title').type(talkTitle);
      cy.get('[id*="taTextElement"]').click().type('Talk');
      cy.get('#seoabstract').type('Talk');
      cy.get('#talktype').select(1);
      cy.get('#language').select('English').invoke('change');
      cy.get('#workshopShortLabel').type('Talk');
      cy.wait(1000);
      cy.get('[label="B level session"]').click();
      cy.get('#editions').select('W-JAX-INSTANCE1');
      cy.get('#addmanuallslug0').click();
      cy.get('select').eq(7).select(1);
      //cy.get('#speakers').select('Saddiqua1, Ayesha');
      cy.get('#secondarytracks').select('Web Development (JAX)');
      cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
      cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
      cy.get('#room').select('Room 1');
      cy.get('#finalapproval').click();
      cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({ force: true });
      cy.get('.btn.btn-primary').eq(0).click();
      //cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
    }
}  */

})

});
      
