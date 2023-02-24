/// <references types="cypress"/>

context('My Second TEST', () => {
    // describe yerine contect de kullanabiliriz

    beforeEach('Her Testten Once Calisacak', () => {  // her testtten once sayfaya gitmesi icin bu functioni olusturduk
        
        cy.visit('/') // bunun icindeki '/' bizi cypress.congig.js dosyasinin icinde olusturdugum baseUrl i getirir
    })

    it('URL Test', () => {

    cy.url().should('include','google')
    cy.url().should('eq','https://www.google.com/') // adres buna esit mi?

    })


    it('Title Test', () => {

    cy.title().should('include','Google')
    cy.title().should('equal','Google')

        
    })


    it('Search Test', () => {

      cy.get('.gLFyf').type('Cypress.io{enter}')
      // cy.get('.gLFyf') : search butonunun locate ini otomatik alabiliyoruz browser uzerinden
      // type('Cypres.io{enter}') : bu kisimda Cypres.io yaz ve enter yap dedim
     
     
      // ****************************** //

      // get(): locate aliyoruz
      // type(): metin gonderiyoruz
      // {enter}: ENTER tusuna bas
      // burada manuel locate alirsak css kullaniyoruz XPath'i kabul etmiyor
    })

    //it.skip : testi yapmadan gecer
    it.skip('Search Test', () => {
        cy.get('.gLFyf',{timeout: 3000}).type('Cypress.io{enter}') // burada 3 sn bekle dedik



    })

    it.only('Click', () => {
       
        // it.only: sadece bu testi calistir demek
        cy.get('.gb_Ef').click()

    })

})