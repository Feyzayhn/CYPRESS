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
    
        

        // *****  ASSERT YONTEMLERI  *****


        // 1) have.text
        cy.get('#navLogon > .nav-link').should('have.text','Log in')
        // burada once locate'i yazdik - sonra assert yaptik - locate icindeki text Log in iceriyor mu diye dogrulama yaptik
        // locate edilen yerdeki metinde Log in yaziyor mu ?


        // 2) cy.url().should()
        cy.url().should('include','Account/Logon') // url Account/Logon iceriyor mu?



        // 3) be.visible
        cy.get('.row > .mb-4').should('be.visible') // gorunen yer visible oldu mu?



        // 4) cy.title () 
        cy.title().should('eq','KoalaResortHotels - Log in')



        // 5)include.text
        cy.get('#navLogon > .nav-link').should('include.text','Log in') 
        // locate edilen yerdeki metin 'Log in' iceriyor mu?


        // ***** TOPLAM LINK SAYISINI BULMA *****

        cy.get('li a').should('have.length',29) 
        // li ile baslayip a ile devam eden linklerin sayisini dogruladik


        // find() : Belirli bir html seciminin alt elemanlarini bulmak icin Paretnlarin Child'ini bulmak icin
        cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')
        // "li" parent taginin altindaki "child tag" dan secmis oldugumuz locate "Twin 2" text'ine sahip mi diye dogruluyoruz
        // find() icine child elementin locate'i yaziliyor
        // cy.find() seklinde kullanilmaz
        // cy.get().find() seklinde kullanilir


        // within()
        cy.get('div.categories').within( () => {
            cy.get('a[href="/Rooms/320"]').click()
        })
        // Parent : cy.get('div.categories') , Child : within sonrasi cy.get('a[href="/Rooms/320"]') 
        
        /* NOT : Web Elementleri ilk olarak get ile bulacagiz. Eger get() ile bulamazsak
                 find() ile deneyecegiz. Onunlada bulamazsak within() ile deneyecegiz 
        */
      

        /* NOT : Locate alirken cy.get()
                                cy.get().find() 
                                cy.get().within( () => {cy.get()})  yapilari kullanilir
        */
         


    })

  
})