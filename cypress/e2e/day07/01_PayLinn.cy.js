/// <references types="cypress"/>

import HomePage from "../POM/HomePage.cy"  // POM klasorunden bunu dosyayi import ettim
import LoginPage from "../POM/LoginPage.cy" // POM klasorunden bunu dosyayi import ettim

describe('PayLinn Bank', () => {

    before(function(){

        cy.fixture('paylinn').then(function(data){  //fixture klasorune git paylinn dosyasından buradaki dataları oku seklinde fonk olusturduk
            
            this.data=data // dataları her taraftan kullanabilmek icin tanimladik
        })

    })

    it('PayLinn Bank Login Test', function() { // yukaridaki function u kullanabilmesi icin burada baglanti olusturduk

       const homePage = new HomePage() // SAYFA OBJESİNİ OLUSTURDUM
       const loginPage = new LoginPage() // YUKARDA IMPORT ETTIKTEN SONRA SAYFA OBJESINI OLUSTURDM
     



       // cy.visit('https://paylinn.com/') bunun yerine asagidaki gibi yazdik
          cy.visit(this.data.url)

       // cy.get('[href="/login"] > .header__option > .header__lineTwo').click() buna gerek kalmadı bunun yerine olusturmus oldugumuz objeyi kullanacagiz
          homePage.getSigninLink().click() 

       // cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.userName) BUNUN YERİNE ASAGİDAKİ GİBİ YAPACAGİZ
          loginPage.getUserNameBox()

       // cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.password)
          loginPage.getPaswordBox()

        //cy.get('.MuiButton-label').click()
        loginPage.getLoginButton().click()

        //cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text', 'Welcome')
        loginPage.getWelcomeTest().should('contain.text', 'Welcome')

        loginPage.getHeader().should('contain.text', 'Welcome').and('contain.text', 'Logout').and('contain.text', 'React User') // bu locate de 3 element vardı and kullanarak sırası ile dogruladik 

        

    })

   /*
     1.POM klasoru icinde 2 ana yapı olusturduk HomePage de ana giris
                                                LoginPage ic kisimda doldurulacak alanlar
     2.Bu 2 ana yapi icinde class olusturduk ve bu class icinde method olusturduk ki vermis oldugumuz locateleri bize dondurmesini istedik
     3.Bu clasları kullanmak istedigimiz bu dosyanin icinde import ettik
     4.Import ettikten sonra obje olusturduk
     5.Obje olusturduktan sonra kullandik

     kisaca locateleri POM altindaki dosyalarda olusturup oradan cagirip kullaniyoruz
    */
})