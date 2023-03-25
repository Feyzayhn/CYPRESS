/// <references types="cypress"/>

describe('Custom Command2', () => {

    it('Amazon Search', () => {

        cy.amazonSearch('iphone')  // arama yaptik burada commands.js dosyasında olusturdugumuz methoddan yaptik
        cy.get('.a-color-state').should('include.text','iphone') // dogrulama yaptik
        cy.get('#twotabsearchtextbox').should('have.value','iphone')
        // html kodlarindaki arama butonundaki value = "iphone" degerini assert ettik
        
        cy.screenshot()
         /*
          bunu yazdiğimda ve testi çalıştırdığımda otomatik olarak sol tarafta klasor olusturuyor
          ve screenshot lari çekip içine atıyor
          */   
    })




   
})