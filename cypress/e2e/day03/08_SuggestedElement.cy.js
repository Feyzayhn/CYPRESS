/// <references types="cypress"/>

describe('Suggested Element', () => {  // yani onerilen elementler

    it('Test Case 1', () => {
     
        cy.visit('https://www.google.com')

        // 1.Yol
        cy.get('.gLFyf').type('Yahoo')
        cy.get('.pcTkSc').contains('mail').click()

        // 2.Yol
       // cy.get('li span b').contains('mail login').click()
       // istedigim text e ulasmak icin parant dan child e giden isimlerini yazarak elementi buldum
    })

    
})