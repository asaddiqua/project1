describe('Visit site daily at 5 AM EuropeTime', () => {
    it('visits the site successfully', () => {
      cy.visit('https://entwickler.de/android');
      cy.wait(100000);
      cy.visit('https://entwickler.de/api');
      cy.wait(100000);
      cy.visit('https://entwickler.de/continuous-delivery');
      cy.wait(100000);
      cy.visit('https://entwickler.de/dotnet');
      cy.wait(100000);
      cy.visit('https://entwickler.de/ios');

      // cy.contains('h1', 'Welcome to the site').should('be.visible');
  
      cy.log('Successfully visited the site at ' + new Date().toLocaleString());
    });
  });
  