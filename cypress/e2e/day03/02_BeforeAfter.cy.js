/// <references types="cypress"/>

describe('Before After', () => {
    before( () => {
        cy.log('Her test dosyasindan once bir kere calisacak')
    })
   
   after( () => {
       cy.log('Her test dosyasindan sonra calisacak')
   })

   beforeEach( () => {
       cy.log('Her testen once bir kere calisacak')
   })

   afterEach( () => {
       cy.log('Her testten sonra bir kere calisacak ')
   })
   
    /*
    NOT : 1.before calisacak
          2.beforeEach calisacak
          3.Test Case 1 calisacak
          4.afterEach calisacak
          5.beforeEach calisacak
          6.Test Case 2 calisacak
          7.afterEach calisacak
          8.after calisacak
    */




    it('Teat Case 1', () => {
        cy.log('Test Case 1')
        // log() komutu consola yazdirir


    })

    it('Test Case 2', () => {
        cy.log('Test Case 2')
        
    })
})