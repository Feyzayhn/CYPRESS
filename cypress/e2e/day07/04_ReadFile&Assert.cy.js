/// <references types="cypress"/>

describe('ReadFile&Assert', () => {

    it('Assert', () => {

      cy.readFile('./cypress/fixtures/users.json').then((userData) => {  // fixtures klasorunun altindaki users.json dosyasini oku ve bir fonk olustur

        expect(userData[3].name).to.equal('Patricia Lebsack')   // userData fonk users.json dosyasindaki indexi 3 olan name i alip equal içine yazilan ile karsilastirip eşit oldugunu dogruluyor
        expect(userData[3].username).to.equal('Karianne') 
        expect(userData[3].address.street).to.equal('Hoeger Mall') // bunlar JSon formatinda oldugu icin pojo class gibi altina indim  address.street
        expect(userData[3].company.name).to.equal('Robel-Corkery')

      })


    })

/*

 {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },


  yukarıdaki datalar fixtures klasoru altindaki users.json dosyasinin icinde oradan cagirip kullandik
*/





})