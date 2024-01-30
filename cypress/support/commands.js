// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

//const cypress = require("cypress");

/* Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
cypress.commands.add('login',(username, password) => 
{
    cy.session[username,password], () => 
    {
        cy.visit('http://conf2016qa.sandsmedia.com'); 
        // Enter username and password and click on signin 
            cy.get('body > header > div > nav > ul:nth-child(3) > li:nth-child(3) > a').click();
            cy.get('#email').type('email');
            cy.get('#password').type('password');
            cy.get('body > section > section > section > section > div > div > div > form > fieldset > div.text-center.form-group.ng-binding > button').click();

    })*/

    /*const cypress = require("cypress");

cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('http://conf2016qa.sandsmedia.com');
    // Enter username and password and click on signin
    cy.get('body > header > div > nav > ul:nth-child(3) > li:nth-child(3) > a').click();
    cy.get('#email').type(email); // Typing the username variable
    cy.get('#password').type(password); // Typing the password variable
    cy.get('body > section > section > section > section > div > div > div > form > fieldset > div.text-center.form-group.ng-binding > button').click();
  });
});*/
import 'cypress-file-upload';


    