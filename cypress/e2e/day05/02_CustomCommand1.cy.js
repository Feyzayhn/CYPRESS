/// <references types="cypress"/>

describe('Custom Command1', () => {

    it('Positive Login', () => {

     cy.visit('https://automationpractice.com/index.php')
     cy.get('.login').click()
     cy.get('#email').type('123murat123@gmail.com')
     cy.get('#passwd').type('123murat123')
     cy.get('#SubmitLogin > span').click()

     cy.get('.account > span').should('have.text','Murat Murat') // login oldugumuzu dogruladik


    })


/*
  Seleniumda ki gibi Reusable Metotlar oluşturduk bunu da support klasorunun altindaki
  commands.js dosyasi içinde yaptik
  Asagidaki Positive Login with Custom testi de buna örnek oldu
*/


    it('Positive Login with Custom', () => {

        cy.ap_login('123murat123@gmail.com','123murat123')
        // cy.ap_login -> commands.js dosyasinda olusturdugumuz fonksiyon
        cy.get('.account > span').should('have.text','Murat Murat') 

    })

    
    it('Negative Login', () => {
        
        cy.ap_login('123murat123@gmail.com','123murat12') // dogru mail yanlis password girdik ve giris yapamadigimizi dogruluyoruz
        
        cy.get('ol > li').should('have.text','Authentication failed.')
    })
})