/// <references types="cypress"/>

describe('Scrollintoview', () => {

    it('', () => {

        cy.visit('https://qa-environment.koalaresorthotels.com/')
       
        cy.wait(3000)
       
        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        //scrollIntoView() : locate edilen yerin altina sayfayi kaydirir
      
        cy.wait(3000)
        
        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
        .scrollIntoView({duration: 4000}) // burada ise kayma suresini belirledik 4sn de kay dedik
        // {duration: 4000} 4 sn icinde locate edilen yere gel

        // scrollTo(x,y)
        cy.scrollTo(0,0) // sayfayi en üste tekrar gotürür koordinat tanimliyoruz

        cy.wait(2000)

        cy.scrollTo(0, 500) // 500 px asagi kaydirdi
   
        cy.wait(2000)

        cy.scrollTo('500px') // 500 px daha asagi gitti bu sekilde de yazilir

        cy.wait(2000)

        cy.scrollTo(0,-500) // 500 px yukari gider


    })

   
})