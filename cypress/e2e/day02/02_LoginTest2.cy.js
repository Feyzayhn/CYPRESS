/// <references types="cypress"/>

describe('Koala Resort Hotel', () => {

    it('Login Test', () => {
      
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        // 1) contains('Text') seklinde yapilabilir
        // cy.contains('Log in').click()
       
        // 2) contains('locator','Text') seklinde yapilabilir
        //cy.contains('[class="nav-link"]', 'Log in').click // verilen locate de Log in adinda bir webElement var ona tikla
        cy.contains('li', 'Log in').click // li tagi icindeki Log in web elementine tikla

        // 3) contains('text')
        cy.contains('log in', {matchCase: false}).click() // buyuk ve kucuk harf duyarliligini kaldirdik
        // Buyuk ve kucuk harf dikkate almadan, metin olarak log in iceren web elementini ara
    
        

        // ASSERT


        // 1)



        // 2)



        // 3)



        // 4)



        // 5)
    })

    it('', () => {
        
    })
})