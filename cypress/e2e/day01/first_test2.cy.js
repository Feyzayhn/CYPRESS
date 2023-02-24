/// <references types="cypress"/>

describe('My First Test', function() { // bu kisimlari function() seklinde de yazabilirim
                                       // firs_test1 dosyasinin aynisi sadece bu kismin yaziminin boylede olabilecegini gostermek icin olusturduk
  it('URL TEST', function() {

      cy.visit('https://www.google.com/') 
      cy.url().should('include','google')   
   
  })

  it('Title TEST', function() {

      cy.visit('https://www.google.com/')
      cy.title().should('include','Google')
      cy.title().should('include','Goog')
      cy.title().should('eq','Google')
      

  })
})