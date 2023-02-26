/// <references types="cypress"/>

describe('Selectors Examples', () => {

    it('Css Selectors', () => {

    cy.visit('https://www.amazon.com/')
     
    // 1) By Yag Name
    cy.get('input')

    // 2) By id
    cy.get('#twotabsearchtextbox')

    // 3) By Class
    cy.get('.nav-search-field ')

    // 4) By Attribute name and Value
    cy.get("input[type='text']")

    // 5) By 2 Attribute -- 2 input ve id olarak 2 ayri attribut kullanarak locate aldik
    cy.get("[type='text'][id='twotabsearchtextbox']")


    })
     /*
      Cypress da XPath kullanmak icin cypress.io dan plugin ekledik
      Burada pluginler terminalden tanimlaniyor, tanimlanacak plugin in komutunu
      terminale yazdigimizda artik kullanilabilir hale geliyor 
      sonrasinda support => e2e.js dosyasinin icine bununla ilgili diger komutu ekliyoruz
      */

    it('XPath', () => {
      cy.visit('https://www.google.com')

      // 6) By XPath 
      cy.xpath("//a[@class='gb_p']").should('include.text','Gmail')
      /* 
      /// <references types="cypress"/>
      xpath() algilanmaz ise 1.satira ustteki kodu yazabilirsiniz
      */  

      /*
         require('@cypress/xpath');
         yukaridaki kodu  e2e.cy.js dosyasina ekleyecegiz
      */

       /*
       Cypress da her ne kadar XPath plugin'ini ekleyip xpath kullanabilsekde
       bu cok elverisli degil bu sebeple Css kullanmak daha saglikli oluyor
       */
    })
})