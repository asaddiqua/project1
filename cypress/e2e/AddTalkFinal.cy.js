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
    cy.wait(11000);
})
describe('Add workshops', () => {
    it('Add Workshops', () => {
        cy.get('body > section > section > section > ui-view > section > div.list-group > div:nth-child(1) > div > div.col-md-7 > a').click();
    //cy.get('a[href="/events/6585ac8cd03ca4cc77e524da"').click();
        //cy.get('body > section > section > section > ui-view > section > div.list-group > div:nth-child(2) > div > div.col-md-7 > a').click();
      //cy.get('[style=""] > .list-element-internal-wrapper > .col-md-7 > [ui-sref="events.talk-view({ eventId: event._id, workflowStatesId: null } )"] > .list-group-item-heading').click();
      cy.get('[style=""] > .list-element-internal-wrapper > .col-md-7 > [ui-sref="events.talk-view({ eventId: event._id, workflowStatesId: null } )"] > .list-group-item-heading')
  .click();

      //cy.get('[style=""] > .list-element-internal-wrapper > .col-md-7 > [ui-sref="events.talk-view({ eventId: event._id, workflowStatesId: null } )"] > .list-group-item-heading').click();
      //cy.get('body > section > section > section > ui-view > section > div:nth-child(2) > all-talks > section > div:nth-child(5) > nav > ul.nav.navbar-nav.navbar-right.wfStateFilter > li.pull-right > a').click();
      cy.get('.pull-right > .btn')
      cy.get('.btn > .glyphicon').click();

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

//Friday workshop
//cy.get('[style=""] > .list-element-internal-wrapper > .col-md-7 > [ui-sref="events.talk-view({ eventId: event._id, workflowStatesId: null } )"] > .list-group-item-heading').click();
cy.get('.pull-right > .btn > .glyphicon').click();
//cy.get('.pull-right > .btn')
      //cy.get('.btn > .glyphicon').click();
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

//Tuesday Talk 1.1 name 
cy.get('.pull-right > .btn > .glyphicon').click();
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
cy.get('#secondarytracks').select('Web Development (JAX)');
cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
cy.get('#room').select('Room 1');
cy.get('#finalapproval').click();
cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({force:true}); 
cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();

//1
cy.get('[style=""] > .list-element-internal-wrapper > .col-md-7 > [ui-sref="events.talk-view({ eventId: event._id, workflowStatesId: null } )"] > .list-group-item-heading').click();
  cy.get('.pull-right > .btn')
  cy.get('.btn > .glyphicon').click();
  cy.get('#title').type('TuesdayTalk1.2');
  cy.get('[id*="taTextElement"]').click().type('Tuesday Talk 1.2');
  cy.get('#seoabstract').type('TuesdayTalk1.2');
  cy.get('#talktype').select(2);
  cy.get('#language').select('English').invoke('change');
  cy.get('#workshopShortLabel').type('TuesdayTalk1.2');
  cy.wait(1000);
  cy.get('[label="B level session"]').click();
  cy.get('#editions').select('W-JAX-INSTANCE1');
  cy.get('#addmanuallslug0').click();
  cy.get('#secondarytracks').select('Web Development (JAX)');
  cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
  cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
  cy.get('#room').select('Room 2');
  cy.get('#finalapproval').click();
  cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({force:true}); 
  cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
  //2
  cy.get('[style=""] > .list-element-internal-wrapper > .col-md-7 > [ui-sref="events.talk-view({ eventId: event._id, workflowStatesId: null } )"] > .list-group-item-heading').click();
    cy.get('.pull-right > .btn')
    cy.get('.btn > .glyphicon').click();
    cy.get('#title').type('TuesdayTalk1.3');
    cy.get('[id*="taTextElement"]').click().type('TuesdayTalk1.3');
    cy.get('#seoabstract').type('Talk type3');
    cy.get('#talktype').select(2);
    cy.get('#language').select('English').invoke('change');
    cy.get('#workshopShortLabel').type('TuesdayTalk1.3');
    cy.get('[label="B level session"]').click();
    cy.get('#editions').select('W-JAX-INSTANCE1');
    cy.wait(1000);
    cy.get('#addmanuallslug0').click();
    cy.get('#secondarytracks').select('Web Development (JAX)');
    cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
    cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
    cy.get('#room').select('Room 2');
    cy.get('#finalapproval').click();
    cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({force:true}); 
    cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
//3
cy.get('[style=""] > .list-element-internal-wrapper > .col-md-7 > [ui-sref="events.talk-view({ eventId: event._id, workflowStatesId: null } )"] > .list-group-item-heading').click();
      cy.get('.pull-right > .btn')
      cy.get('.btn > .glyphicon').click();
      cy.get('#title').type('TuesdayTalk1.4');
      cy.get('[id*="taTextElement"]').click().type('TuesdayTalk1.4');
      cy.get('#seoabstract').type('TuesdayTalk1.4');
      cy.get('#talktype').select(2);
      cy.get('#language').select('English').invoke('change');
      cy.get('#workshopShortLabel').type('TuesdayTalk1.4');
      cy.wait(1000);
      cy.get('[label="B level session"]').click();
      cy.get('#editions').select('W-JAX-INSTANCE1');
      cy.get('#addmanuallslug0').click();
      cy.get('#secondarytracks').select('Web Development (JAX)');
      cy.get('#secondarytracks').select('DevOps & CI/CD (JAX)');
      cy.get('#secondarytracks').select('Core Java & Languages (JAX)');
      cy.get('#room').select('Room 2');
      cy.get('#finalapproval').click();
      cy.get('.text-center.form-group.error.text-danger.errorBox.col-md-12.ng-binding.ng-hide').eq(0).click({force:true}); 
      cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();

//Monday Workshop final fields check
      
      cy.get('body > section > section > section > ui-view > section > div:nth-child(2) > all-talks > section > table > tbody > tr:nth-child(2) > td.actionLinks.ng-scope > a.btn.ng-scope > i').click();
      cy.get('#workflowstate').select('Live');
      cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
      cy.get('#startDate').click().clear().type('08-January-2024');
      cy.get('#endDate').click().clear().type('08-January-2024');
      cy.get('.hours').eq(1).clear().type('09');
      cy.get('.minutes').eq(1).clear().type('00');
      cy.get('.hours').eq(4).clear().type('17');
      cy.get('.minutes').eq(4).clear().type('00');
      cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();

//Friday Workshop final fields check
      
      cy.get('body > section > section > section > ui-view > section > div:nth-child(2) > all-talks > section > table > tbody > tr:nth-child(1) > td.actionLinks.ng-scope > a.btn.ng-scope > i').click();
      cy.get('#workflowstate').select('Live');
      cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
      cy.get('#startDate').click().clear().type('12-January-2024');
      cy.get('#endDate').click().clear().type('12-January-2024');
      cy.get('.hours').eq(1).clear().type('09');
      cy.get('.minutes').eq(1).clear().type('00');
      cy.get('.hours').eq(4).clear().type('17');
      cy.get('.minutes').eq(4).clear().type('00');
      cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();

      //Tuesday Talk 1.1 final fields check
      
      cy.get('body > section > section > section > ui-view > section > div:nth-child(2) > all-talks > section > table > tbody > tr:nth-child(4) > td.actionLinks.ng-scope > a.btn.ng-scope > i').click();
     
      cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
      cy.get('#workflowstate').select('Live');
      cy.get('#startDate').click().clear().type('09-January-2024');
      cy.get('#endDate').click().clear().type('09-January-2024');
      cy.get('.hours').eq(1).clear().type('09');
      cy.get('.minutes').eq(1).clear().type('00');
      cy.get('.hours').eq(4).clear().type('10');
      cy.get('.minutes').eq(4).clear().type('00');
      cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();
      //Tuesday Talk 1.2 final fields check
  cy.get('body > section > section > section > ui-view > section > div:nth-child(2) > all-talks > section > table > tbody > tr:nth-child(3) > td.actionLinks.ng-scope > a.btn.ng-scope > i').click();
 
  cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
  cy.get('#workflowstate').select('Live');
  cy.get('#startDate').click().clear().type('09-January-2024');
  cy.get('#endDate').click().clear().type('09-January-2024');
  cy.get('.hours').eq(1).clear().type('10');
  cy.get('.minutes').eq(1).clear().type('30');
  cy.get('.hours').eq(4).clear().type('11');
  cy.get('.minutes').eq(4).clear().type('30');
  cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();

    //Tuesday Talk 1.3 final fields check
    cy.get('body > section > section > section > ui-view > section > div:nth-child(2) > all-talks > section > table > tbody > tr:nth-child(2) > td.actionLinks.ng-scope > a.btn.ng-scope > i').click();
   
    cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
    cy.get('#workflowstate').select('Live');
    cy.get('#startDate').click().clear().type('09-January-2024');
    cy.get('#endDate').click().clear().type('09-January-2024');
    cy.get('.hours').eq(1).clear().type('12');
    cy.get('.minutes').eq(1).clear().type('00');
    cy.get('.hours').eq(4).clear().type('13');
    cy.get('.minutes').eq(4).clear().type('00');
    cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click();


      //Tuesday Talk 1.4 final fields check
      cy.get('body > section > section > section > ui-view > section > div:nth-child(2) > all-talks > section > table > tbody > tr:nth-child(1) > td.actionLinks.ng-scope > a.btn.ng-scope > i').click();
      
      cy.get('#primarytracks1').select('JAX Innovation Forum (JAX)');
      cy.get('#workflowstate').select('Live');
      cy.get('#startDate').click().clear().type('09-January-2024');
      cy.get('#endDate').click().clear().type('09-January-2024');
      cy.get('.hours').eq(1).clear().type('13');
      cy.get('.minutes').eq(1).clear().type('30');
      cy.get('.hours').eq(4).clear().type('14');
      cy.get('.minutes').eq(4).clear().type('30');
      cy.get('fieldset > :nth-child(3) > .btn').should('be.visible').click({force: true});
  
    })
    

  });


