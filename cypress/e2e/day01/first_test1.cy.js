/// <references types="cypress"/>

describe('My First Test', () => {
      // describe: tanımlamak demek. Testi tanimliyorum
      // describe ve it mocha dan geliyor

      // 
    it('URL TEST', () => {

        cy.visit('https://www.google.com/') 
         // visit (URL): URL'e git dedik

         cy.url().should('include','google') 
         // include : iceriyor mu demek
         // should : assert islemi icin kullanilir
         // should('include','google'): URL google icerir mi?
     
    })

    it('Title TEST', () => {

        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        cy.title().should('include','Goog')
        // title(): sayfanin title'ini alir

        cy.title().should('eq','Google')
        // eq : esit mi?

    })
})