describe('Example to demonstrate handling of Basic Auth in Cypress', () => {

    it('Successfully login by appending username and password in URL', function () {
        cy.visit('https://tester:Dbxr$2362FE42326dfgGT@https://staging.entwickler.de')

    })

    it('Successfully login using headers', function () {
        cy.visit("https://staging.entwickler.de/login", {
            headers: {
                authorization: 'Basic dGVzdGVyOkRieHIkMjM2MkZFNDIzMjZkZmdHVA=='
            },
            failOnStatusCode: false
        })
    })
})
