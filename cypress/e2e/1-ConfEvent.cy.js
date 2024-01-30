// cypress/integration/login.spec.js
//import 'cypress-iframe'
beforeEach(() =>
{
  cy.visit('http://conf2016qa.sandsmedia.com'); 
// Enter username and password and click on signin 
    cy.get('body > header > div > nav > ul:nth-child(3) > li:nth-child(3) > a').click();
    cy.get('#email').type('asaddiqua@sandsmedia.com');
    cy.get('#password').type('Saddiqua007');
    cy.get('body > section > section > section > section > div > div > div > form > fieldset > div.text-center.form-group.ng-binding > button').click();

})

describe('Event creation', () => {
  it('should create an event successfully', () => {
    cy.url().should('include', '/');
    cy.contains('Welcome to the S&S Media Call for Papers Tool!').should('be.visible'); 
    cy.get('body > header > div > nav > ul.nav.navbar-nav.ng-scope > li:nth-child(3) > a > span.ng-scope').click();
    cy.contains(/Create Event.*/).click();
    cy.url().should('include', '/events/create');
    cy.contains('New Event').should('be.visible');
    cy.get('[type="checkbox"]').check() 
    cy.get('[type="radio"]').first().check();
    //Event Name
    cy.get('#title').type('3rd Event created by automated script');
    cy.get('#redsysgenre').select('CONFERENCE');
    cy.get('#redsyseventtype').select('HYBRID');
    cy.get('#redsyscertificatetype').select('NONE');
    cy.get('#redsyssupportedapp').select(['ENTWICKLER', 'DEVMIO'], { force: true });
    //Conference or EA
    cy.get('#redsyseventteam').select('CONFERENCE', { force: true }); 
    cy.get('#redsysconforcourse').select('isCourse', { force: true });
   
    //Brand Selector
    cy.get('.redsys-brand-chooser').eq(0)
    cy.get('.redsys-brand-chooser > :nth-child(30)').click();

    //Series
    cy.get('.redsys-brand-chooser.ng-scope > :nth-child(6)').click();
    cy.get('.redsys-instance-item-field > :nth-child(1) > .ng-pristine').type('W-JAX-INSTANCE1');
    cy.get('.redsys-instance-item-field > :nth-child(2) > .ng-pristine').type('https://new.basta.net');

    //Tracks
    cy.get('.col-md-6.ng-scope')
    cy.get(':nth-child(1) > .border > span > .fa').click();
    cy.get(':nth-child(2) > .border > span > .fa').click();
    cy.get(':nth-child(5) > .border > span > .fa').click();
    cy.get(':nth-child(7) > .border > span > .fa').click();
    cy.get(':nth-child(9) > .border > span > .fa').click();


    //Talk type
    cy.get('[ng-if="redsysTalkTypes.length"] > .redsys-brand-chooser > :nth-child(3)')
    cy.get('.redsys-brand-chooser > :nth-child(1) > .ng-scope > .fa').click();
    cy.get('.redsys-brand-chooser > :nth-child(2) > .ng-scope > .fa').click();
    cy.get('.redsys-brand-chooser > :nth-child(3) > .ng-scope > .fa').click();
    cy.get('.redsys-brand-chooser > :nth-child(4) > .ng-scope > .fa').click();
    //cy.get('[ng-if="redsysTalkTypes.length"] > .redsys-brand-chooser > :nth-child(4)')
    //cy.get(':nth-child(2) > .ng-scope > .fa').click(); 
    //cy.get(':nth-child(4) > .ng-scope > .fa').click(); 
    //cy.get(':nth-child(7) > .ng-scope > .fa').click();
    //cy.get('.redsys-brand-chooser > :nth-child(7) > .ng-scope > .fa').click();
    //cy.get('[ng-if="redsysTalkTypes.length"] > .redsys-brand-chooser > :nth-child(7)')
    //cy.get('.redsys-brand-chooser > :nth-child(7) > .ng-scope > .fa').click();
//Attatch image
cy.get('#floorPlan > fieldset > div:nth-child(2) > span > input[type=file]').attachFile('img1.jpg', { 
  subjectType: 'input' 
});
//cy.get('#floorPlan > fieldset > div:nth-child(3) > button.btn.btn-primary.ng-binding').click({force: true });
//cy.frameLoaded('body > section > section > section > ui-view > section > div.col-md-12 > form > span > fieldset > div.row.col-xs-12 > div.col-md-12 > div:nth-child(1) > div.input-group.col-md-9 > span > i');
//cy.iframe().find('#datepicker-1768-2121-22 > button').type('19-December-2023');
cy.get('#floorPlan > fieldset > div:nth-child(3) > button.btn.btn-primary.ng-binding')
  .click({ force: true });
//Event Date
cy.get('#startDate').click().type('29-January-2024');
cy.get('#endDate').click().type('02-February-2024');
cy.get('#name').type('W-JAX-QA-conference');
cy.get('#street').type('Stresemann str 76');
cy.get('#postalCode').type('10963');
cy.get('#city').type('Berlin');
cy.get('#country').select('Pakistan');
cy.get('.col-md-12.text-center > .ng-isolate-scope > fieldset > [ng-hide="uploader.queue.length"] > .btn > input').attachFile('Apple.png', { 
  subjectType: 'input'
  })
  cy.get('.col-md-12.text-center > .ng-isolate-scope > fieldset > [ng-show="uploader.queue.length"] > .btn-primary').click();
  cy.wait(1000);
  //cy.get('[ng-show="uploader.queue.length"] > .btn-primary').click();
cy.get(':nth-child(11) > fieldset > .form-group > .btn-default').click();
});



});
