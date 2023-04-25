/// <references types="cypress"/>

describe('PayLinn Bank', () => {

    before(function(){

        cy.fixture('paylinn').then(function(data){  //fixture klasorune git paylinn dosyasından buradaki dataları oku seklinde fonk olusturduk
            
            this.data=data // dataları her taraftan kullanabilmek icin tanimladik
        })

    })

    it('PayLinn Bank Login Test', function() { // yukaridaki function u kullanabilmesi icin burada baglanti olusturduk

       // cy.visit('https://paylinn.com/') bunun yerine asagidaki gibi yazdik
          cy.visit(this.data.url)

        cy.get('[href="/login"] > .header__option > .header__lineTwo').click()

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.userName)

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.password)

        cy.get('.MuiButton-label').click()

        cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text', 'Welcome')

    })

   /*
    SELENIUM DA dataları configuration.properties icine yazıyorduk burada ise 
        fixtures klasoru icinde example.json dosyasina yazabiliriz ya da
        bu formatta yeni bir dosya olusturup bu dosyayı kullanabiliriz
    */
})