/// <references types="cypress"/>

describe('HoverOver', () => {

    it('Test Case', () => {

        cy.visit('https://www.amazon.com/')
        cy.get('.icp-nav-link-inner').trigger('mouseover')
        //trigger() komutu ile mause'un hareketlerini secebiliyoruz 
        //yukarida mause'u dropdown menunun uzerine getirip beklettik

        cy.wait(3000)
        cy.contains('Change country/region.').click()  // dropdown in altindaki bir yaziya tikladik
        //cy.contains() direkt verilen text e tiklicak

        cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force: true})
        // {force: true} => select() burada tek basina secim yapamadi cypress bize bunu eklememizi onerdi

    })

})