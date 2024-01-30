beforeEach(() =>
{
  cy.visit('http://conf2016qa.sandsmedia.com'); 
// Enter username and password and click on signin 
    cy.get('body > header > div > nav > ul:nth-child(3) > li:nth-child(3) > a').click();
    cy.get('#email').type('asaddiqua@sandsmedia.com');
    cy.get('#password').type('Saddiqua007');
    cy.get('body > section > section > section > section > div > div > div > form > fieldset > div.text-center.form-group.ng-binding > button').click();

})
describe('Add Break', () => {
    it('Add Break', () => {
        //First  Break
        cy.get('.dropdown-toggle.ng-scope').eq(2).click();
       cy.get('.open > .dropdown-menu > :nth-child(1) > a > .ng-scope').click();
       cy.get('h4').contains('2nd Event created by automated script').click();
       cy.wait(1000);

cy.get('.nav.navbar-nav.navbar-right.ng-scope').contains('Breaks').click();
       cy.get('.navbar.navbar-default.navbar-right.adminFilterNavbar')
       .contains('Add Break').click();
       cy.get('.pull-right > .btn')
        cy.get('.btn > .glyphicon').click(); 
        cy.wait(6000); 


       cy.get('#title')
       .type('Coffee Break');
       cy.get('#startDate').type('01-February-2024');
       cy.get('#endDate').click().clear().type('01-February-2024');
       cy.get('.hours').eq(1).clear().type('08');
       cy.get('.minutes').eq(1).clear().type('30');
       cy.get('.hours').eq(4).clear().type('09');
       cy.get('.minutes').eq(4).clear().type('00');

//2nd break
       cy.get('.dropdown-toggle.ng-scope').eq(2).click();
       cy.get('.open > .dropdown-menu > :nth-child(1) > a > .ng-scope').click();
       cy.get('.list-group-item-heading.ng-binding').eq(0).click();
       cy.get('#bs-example-navbar-collapse-1 > ul > li:nth-child(4) > a > span').click();
       cy.get('.btn > .glyphicon').click();
       cy.get('#title').type('Coffee Break');
       cy.get('#startDate').click().clear().type('01-February-2024');
       cy.get('#endDate').click().clear().type('01-February-2024');
       cy.get('.hours').eq(4).clear().type('10');
       cy.get('.minutes').eq(4).clear().type('00');
       cy.get('.hours').eq(1).clear().type('10');
       cy.get('.minutes').eq(1).clear().type('30');

//3rd Break
       cy.get('.dropdown-toggle.ng-scope').eq(2).click();
       cy.get('.open > .dropdown-menu > :nth-child(1) > a > .ng-scope').click();
       cy.get('.list-group-item-heading.ng-binding').eq(0).click();
       cy.get('#bs-example-navbar-collapse-1 > ul > li:nth-child(4) > a > span').click();
       cy.get('.btn > .glyphicon').click();
       cy.get('#title').type('Coffee Break');
       cy.get('#startDate').click().clear().type('02-February-2024');
       cy.get('#endDate').click().clear().type('02-February-2024');
       cy.get('.hours').eq(4).clear().type('11');
       cy.get('.minutes').eq(4).clear().type('30');
       cy.get('.hours').eq(1).clear().type('12');
       cy.get('.minutes').eq(1).clear().type('00');
//4th Break
       cy.get('.dropdown-toggle.ng-scope').eq(2).click();
       cy.get('.open > .dropdown-menu > :nth-child(1) > a > .ng-scope').click();
       cy.get('.list-group-item-heading.ng-binding').eq(0).click();
       cy.get('#bs-example-navbar-collapse-1 > ul > li:nth-child(4) > a > span').click();
       cy.get('.btn > .glyphicon').click();
       cy.get('#title').type('Coffee Break');
       cy.get('#startDate').click().clear().type('03-February-2024');
       cy.get('#endDate').click().clear().type('03-February-2024');
       cy.get('.hours').eq(4).clear().type('13');
       cy.get('.minutes').eq(4).clear().type('00');
       cy.get('.hours').eq(1).clear().type('13');
       cy.get('.minutes').eq(1).clear().type('30');


        })
  })
