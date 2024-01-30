beforeEach(() =>
{
  cy.visit('http://conf2016qa.sandsmedia.com'); 
// Enter username and password and click on signin 
    cy.get('body > header > div > nav > ul:nth-child(3) > li:nth-child(3) > a').click();
    cy.get('#email').type('asaddiqua@sandsmedia.com');
    cy.get('#password').type('Saddiqua007');
    cy.get('body > section > section > section > section > div > div > div > form > fieldset > div.text-center.form-group.ng-binding > button').click();

})
describe('Add Speaker', () => {
    it('Add Speaker', () => {
        //
        cy.get('.dropdown-toggle.ng-scope').eq(2).click();
        cy.get('.open > .dropdown-menu > :nth-child(3) > a > .ng-scope').click();
        cy.get('.list-group-item-heading.ng-binding').eq(0).click();
        //cy.get('.dropdown-toggle.ng-scope').eq(2).click();
        //cy.get('.open > .dropdown-menu > :nth-child(1) > a > .ng-scope').click();
        //cy.get('h4').contains('2nd Event created by automated script').click();
        
        
        cy.get('.navbar-default.event-navbar').contains('Speaker').click();
        cy.get('.navbar-default.navbar-right.adminFilterNavbar').contains('Speaker').click();
        //cy.get('.list-group-item-heading.ng-binding').eq(0).click();
        cy.get('#approveAddExpert').click();
        cy.get('#canspeakerFirstName').type('Ayesha');
        cy.get('#canspeakerLastName').type('Saddiqua2');
        cy.get('#canspeakerSlug').type('saddiqua2')
        cy.get('#canspeakerEmail').type('asaddiqua+speaker1@phpconference.com');
        cy.get('#canspeakerCompany').type('Sandsmedia');
        cy.get('#canspeakerBioDe').type('AyeshaSaddiquaSpeaker2');
        cy.get('#canspeakerBioEn').type('AyeshaSaddiquaSpeaker2');
        cy.get('#canspeakerQualifictions').select('B level speaker');
        //cy.get('[value="6585ac8cd03ca4cc77e524e7"]').click();
        
        cy.get('.btn > input')
        .attachFile('img4.jpg', { 
                subjectType: 'input' 
          });
          cy.wait(1000);
          cy.get('[ng-show="uploader.queue.length"] > .btn-primary').click();
          cy.wait(2000);
          cy.get('.col-md-12.text-center > .btn')
          .click();
          
  
        })
  })
