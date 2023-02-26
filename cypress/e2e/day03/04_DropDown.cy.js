/// <references types="cypress"/>

describe('DropDown', () => {

    it('Test Case', () => {

        cy.visit('https://the-internet.herokuapp.com/dropdown')

        cy.get('#dropdown').select('Option 1').should('have.value','1')
        cy.get('#dropdown').select('Option 2').should('have.value','2')
       
        // burada da select() komutunu kullaniyoruz seleniumdaki gibi
        // ek bir click yapmaya gerek yok select() komutu ile secimini yapiyor


    })

   
})