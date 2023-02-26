/// <references types="cypress"/>

describe('CheckBoxes', () => {

    it('Single CheckBox', () => {

        cy.visit('https://automationpractice.com/index.php')

        // cy.get('.sf-with-ul').first().click() // bu locate'den 4 tane vardi biz burda 1.sine gidip tiklamasini istedik
        // first() : Birden fazla web element varsa birinciyi sec demek
        
        cy.get('.sf-with-ul').eq(0).click() 
        // eq() : birden fazla web element oldugunda istedigimizi secmemizi saglar 
        // index ile calisir icine sitedigimiz index i seceriz
        // first() = eq(0) bunlar esittir

        cy.get('#layered_category_4').should('not.be.checked')
        // should('not.be.checked') : yukarda girdigimiz web elementin tikli olmadigini dogruladi
       

        // *** TIKLAMA ***  
        cy.get('#layered_category_4').check().should('be.checked') 
        // check() : tiklama yapar
        // should('be.checked') : web element tikli mi diye dogruladi
        
        // *** TIKLAMAYI KALDIR ***
        cy.get('#layered_category_4').uncheck().should('not.be.checked')
        // uncheck() : tiklamayi kaldirir
        // sonrada tikli olmadigini dogruladik

        
    })

    
    it('All CheckBoxes 1', () => {
        
        cy.visit('https://automationpractice.com/index.php')
        cy.get('.sf-with-ul').eq(0).click() 

        // Butun checkbox'lara TIKLA
        cy.get("input[type='checkbox']").check()  // bu locate de 19 tane checkbox var
        
        cy.get(3000)

        // Butun checkbox'lara TIKLAMAYI KALDIR
        cy.get("input[type='checkbox']").uncheck()
    })

    it.only('All CheckBoxes 2', () => {

        cy.visit('https://automationpractice.com/index.php')
        cy.get('.sf-with-ul').eq(0).click()

        // 1. kutuya tikla ve dogrula
        cy.get("input[type='checkbox']").eq(0).check().should('be.checked')


        // 5.kutuya tikla ve dogrula
        cy.get("input[type='checkbox']").eq(4).check().should('be.checked')


        // 12.kutuya tikla ve dogrula
        cy.get("input[type='checkbox']").eq(11).check().should('be.checked')


        // *** TIKLAMAYI KALDIR *** ve Dogrula
        cy.get("input[type='checkbox']").eq(0).uncheck().should('not.be.checked')

        // NOT : uncheck(): Tiklamayi kaldirir
        // should('not.be.checked') : tiklamanin kaldirildigini ASSERT eder

        
    })

    it.only('All CheckBoxes 2', () => {

        cy.visit('https://automationpractice.com/index.php')
        cy.get('.sf-with-ul').eq(0).click()

        cy.get("input[type='checkbox']").click({ multiple: true }) 
        // bu locate 19 tane checkbox var hepsine tek seferde tiklamasini istedigimiz icin
        // Cypress "{ multiple: true }" bunu yazmami istedi
    })
})