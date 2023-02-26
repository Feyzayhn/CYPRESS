/// <references types="cypress"/>

describe('SuperDomain', () => {

    it('Test Case 1', () => {

        cy.visit('https://www.amazon.com')
        cy.wait(2000)
        cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')

        // Ayni domain icindeki ikinci sayfalara gidebilirsiniz

    })

    it('Test Case 1.5', () => {

        cy.visit('https://www.cypress.io/')
        cy.wait(3000)

        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')

        
    })




    it('Test Case 2', () => {

        cy.visit('https://www.google.com')
        cy.wait(2000)
        cy.visit('https://www.amazon.com')
    })
})