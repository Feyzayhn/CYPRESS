/// <references types="cypress"/>

describe('', () => {

    it('Suggested ELmenets 2', () => {
       
        cy.visit('https://automationpractice.com/index.php')
        
        cy.get('#search_query_top').type('dress')

        cy.wait(6000)

        cy.get('.ac_results').contains('Blouse').click() 
        // parent locate : cy.get('.ac_results')
        // contains('Blouse') => parent'in altindan 'Blouse' yazani tikla 

        cy.get('h1').should('be.visible') // h1 tagi gorunur mu diye dogruladik
   
   
    })
})