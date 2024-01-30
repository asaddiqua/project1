beforeEach(() =>
{
  cy.visit('http://conf2016qa.sandsmedia.com'); 
// Enter username and password and click on signin 
    cy.get('body > header > div > nav > ul:nth-child(3) > li:nth-child(3) > a').click();
    cy.get('#email').type('asaddiqua@sandsmedia.com');
    cy.get('#password').type('Saddiqua007');
    cy.get('body > section > section > section > section > div > div > div > form > fieldset > div.text-center.form-group.ng-binding > button').click();

})
describe('Add Room', () => {
    it('Add Room', () => {
        //Room 1
       cy.get('.dropdown-toggle.ng-scope').eq(2).click();
       cy.get('.open > .dropdown-menu > :nth-child(3) > a > .ng-scope').click();
       cy.get('.list-group-item-heading.ng-binding').eq(0).click();
        cy.get('#bs-example-navbar-collapse-1 > .nav > .dropdown > .dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(1) > a.ng-scope > .ng-scope').click();
        cy.get('[heading="Rooms"] > .nav-link').click();
        cy.get('[directive="<all-rooms></all-rooms>"] > div.ng-scope > .ng-isolate-scope > section.ng-scope > form.ng-pristine > .navbar > .nav > .pull-right > .btn').click();
        cy.get('#title').type('Room 1');
        cy.get('#weight').type('0');
        cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').click();
        // Meeting mode cy.get(':nth-child(3) > .ng-pristine').click();      
        // Meeting mode cy.get('#livestreamzoomlink').type('https://sandsmedia.zoom.us/j/89158808758?pwd=bnRxNW9wTXRYeUZFVlBxdDY4MU8xQT09');
        cy.get('#videostreamurl').type('https://vimeo.com/event/3875811/embed');
        cy.get('.btn > .ng-scope').click();

    })
    describe('Add Room', () => {
        it('Add Room', () => {
            //Room 2 
           cy.get('.dropdown-toggle.ng-scope').eq(2).click();
           cy.get('.open > .dropdown-menu > :nth-child(1) > a > .ng-scope').click();
           cy.get('.list-group-item-heading.ng-binding').eq(0).click();
            cy.get('#bs-example-navbar-collapse-1 > .nav > .dropdown > .dropdown-toggle').click();
            cy.get('.dropdown-menu > :nth-child(1) > a.ng-scope > .ng-scope').click();
            cy.get('[heading="Rooms"] > .nav-link').click();
            cy.get('[directive="<all-rooms></all-rooms>"] > div.ng-scope > .ng-isolate-scope > section.ng-scope > form.ng-pristine > .navbar > .nav > .pull-right > .btn').click();
            cy.get('#title').type('Room 2');
            cy.get('#weight').type('0');
            cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').click();
            // Meeting mode 
            cy.get(':nth-child(3) > .ng-pristine').click();      
            // Meeting mode 
            cy.get('#livestreamzoomlink').type('https://sandsmedia.zoom.us/j/89158808758?pwd=bnRxNW9wTXRYeUZFVlBxdDY4MU8xQT09');
            // video stream cy.get('#videostreamurl').type('https://vimeo.com/event/3875811/embed');
            // video stream cy.get('.btn > .ng-scope').click();
            cy.get('.btn > .ng-scope').click();
        })
        describe('Add Room', () => {
            it('Add Room', () => {
                //Room 3
               cy.get('.dropdown-toggle.ng-scope').eq(2).click();
               cy.get('.open > .dropdown-menu > :nth-child(1) > a > .ng-scope').click();
               cy.get('.list-group-item-heading.ng-binding').eq(0).click();
                cy.get('#bs-example-navbar-collapse-1 > .nav > .dropdown > .dropdown-toggle').click();
                cy.get('.dropdown-menu > :nth-child(1) > a.ng-scope > .ng-scope').click();
                cy.get('[heading="Rooms"] > .nav-link').click();
                cy.get('[directive="<all-rooms></all-rooms>"] > div.ng-scope > .ng-isolate-scope > section.ng-scope > form.ng-pristine > .navbar > .nav > .pull-right > .btn').click();
                cy.get('#title').type('Room 3');
                cy.get('#weight').type('0');
                cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').click();
                // Meeting mode 
                cy.get(':nth-child(3) > .ng-pristine').click();      
                // Meeting mode 
                cy.get('#livestreamzoomlink').type('https://sandsmedia.zoom.us/j/89158808758?pwd=bnRxNW9wTXRYeUZFVlBxdDY4MU8xQT09');
                // video stream cy.get('#videostreamurl').type('https://vimeo.com/event/3875811/embed');
                // video stream cy.get('.btn > .ng-scope').click();
                cy.get('.btn > .ng-scope').click();
            })
            describe('Add Room', () => {
                it('Add Room', () => {
                    //Room 4
                   cy.get('.dropdown-toggle.ng-scope').eq(2).click();
                   cy.get('.open > .dropdown-menu > :nth-child(1) > a > .ng-scope').click();
                   cy.get('.list-group-item-heading.ng-binding').eq(0).click();
                    cy.get('#bs-example-navbar-collapse-1 > .nav > .dropdown > .dropdown-toggle').click();
                    cy.get('.dropdown-menu > :nth-child(1) > a.ng-scope > .ng-scope').click();
                    cy.get('[heading="Rooms"] > .nav-link').click();
                    cy.get('[directive="<all-rooms></all-rooms>"] > div.ng-scope > .ng-isolate-scope > section.ng-scope > form.ng-pristine > .navbar > .nav > .pull-right > .btn').click();
                    cy.get('#title').type('Room 4');
                    cy.get('#weight').type('0');
                    cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').click();
                    // Meeting mode 
                    cy.get(':nth-child(3) > .ng-pristine').click();      
                    // Meeting mode 
                    cy.get('#livestreamzoomlink').type('https://sandsmedia.zoom.us/j/89158808758?pwd=bnRxNW9wTXRYeUZFVlBxdDY4MU8xQT09');
                    // video stream cy.get('#videostreamurl').type('https://vimeo.com/event/3875811/embed');
                    // video stream cy.get('.btn > .ng-scope').click();
                    cy.get('.btn > .ng-scope').click();
                })
    
  })
})
})
});