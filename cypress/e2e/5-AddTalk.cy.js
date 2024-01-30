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
     /* cy.get('.pull-right > .btn')
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
cy.get('#secondarytracks').select('Web Development (JAX)');
cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
cy.get('#room').select('Room 1');
cy.get('#finalapproval').click();
cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({force:true}); 
cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();



//Tuesday Talk 1.1 name cy.get('.pull-right > .btn')
  cy.get('.btn > .glyphicon').click();
cy.get('#title').type('TuesdayTalk1.1 ');
cy.get('[id*="taTextElement"]').click().type('TuesdayTalk .1 ');
cy.get('#seoabstract').type('TuesdayTalk1.1 ');
cy.get('#talktype').select(2);
cy.get('#language').select('English').invoke('change');
cy.get('#workshopShortLabel').type('TuesdayTalk1.1 ');
cy.wait(1000);
cy.get('[label="B level session"]').click();
cy.get('#editions').select('W-JAX-INSTANCE1');
cy.get('#addmanuallslug0').click();
cy.get('#speakers').select('Saddiqua1, Ayesha');
cy.get('#secondarytracks').select('Web Development (JAX)');
cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
cy.get('#room').select('Room 1');
cy.get('#finalapproval').click();
cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({force:true}); 
cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();*/

//Wednesday Talk 11 
cy.get('.btn > .glyphicon').click();
cy.get('#title').type('Wednesday11 ');
cy.get('[id*="taTextElement"]').click().type('Wednesday11');
cy.get('#seoabstract').type('Wednesday11');
cy.get('#talktype').select(2);
cy.get('#language').select('English').invoke('change');
cy.get('#workshopShortLabel').type('Wednesday11');
cy.wait(1000);
cy.get('[label="B level session"]').click();
cy.get('#editions').select('W-JAX-INSTANCE1');
cy.get('#addmanuallslug0').click();
cy.get('select').eq(7).select(1);
//cy.get('#speakers').select('0');
cy.get('#secondarytracks').select('Web Development (JAX)');
cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
cy.get('#room').select('Room 1');
cy.get('#finalapproval').click();
cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({force:true}); 
cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();

    })
 
  

    });
 //})
//});
 //});
