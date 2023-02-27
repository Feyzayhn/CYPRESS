/// <references types="cypress"/>

describe('Koala Resort Hotel', () => {

    it('Log in Testi', () => {
        
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        // Seleniumdaki get gibi dusunulebilir visit komutu
        
        // 1.YOL
        // cy.get('#navLogon > .nav-link').click() 
        // login butonuna click yaptik locate i hazir aldik 

        // 2.YOL
        cy.contains('Log in').click()
        //contains(): DOM'da Log in textini bul. Metni text olarak arar

        cy.url().should('include','Account/Logon')

        // username: Manager
        cy.get('#UserName').type('Manager')
        //Selenium
        //driver.findElement(BycssLocator("#UserName")).senKeys("Manager")


        //password: Manager1!
        // 1.YOL
        // cy.get('#Password').type('Manager1!')
        // cy.get('#btnSubmit').click

        // 2.YOL
        cy.get('#Password').type('Manager1!{enter}')


    })

    
})