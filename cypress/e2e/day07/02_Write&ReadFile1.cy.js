/// <references types="cypress"/>

describe('Write&Read File', () => {

    it('Write File', () => {

        cy.writeFile('03_NotDefteri.txt','Cypress Notes\n' )
        cy.writeFile('03_NotDefteri.txt','1) Cypress Install\n',{flag: 'a+'} )
        cy.writeFile('03_NotDefteri.txt','2) Plugins\n',{flag: 'a+'} )

        

    })

    it('Read File', () => {
      
        cy.readFile('03_NotDefteri.txt').should('contain','Plugins')
        
        
    })
})

/*
hangi klasorun icinde dosya olusturtmak istiyorsam onun üzerine sag tiklayip Copy Path yapiyoruz
bu yolu yapistiriyoruz 
  örn day07 dosyasindan yol alayim 
          C:\Users\feyza2\Desktop\my-cypress-framework\cypress\e2e\day07    bunun basina gerek yok
                                 .\cypress\e2e\day07   bu kismi yeterli
   yeni olusturacagim dosya ismini de sonuna ekliyorum  
          .\cypress\e2e\day07\03_NotDefteri.txt
  
   burada da içine not yazdiriyoruz 
           '.\cypress\e2e\day07\03_NotDefteri.txt','CYPRESS NOTES'   
           
    direkt dosya adı yazip istedigimiz sekilde de olusturabiliriz     
    
    {flag: 'a+'} => not defterinin devamında bir şey yazmak istersek bunu ekliyoruz bu yazmazsak en son yazdigimiz kelimeyi dosyaya yazar bir öncekini siler
    \n => notu alt satira atiyor
*/