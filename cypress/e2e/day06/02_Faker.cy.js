/// <references types="cypress"/>
import  {  faker  }  from  '@faker-js/faker'

/*
 FAKER KURULUM
 1-) https://www.npmjs.com/package/@faker-js/faker

 2-) npm install --save-dev @faker-js/faker

 3-) import  {  faker  }  from  '@faker-js/faker'  class icinde import ettik bunu 1 kere yapmamız yeterli butun classlarda import olur

    istersek e2e.js class inin icine require('@faker-js/faker') seklinde ekleme yapıpta import da edebiliriz
*/

describe('Using Faker', () => {


    it('Faker Login Test', () => {
     
        cy.visit("http://automationpractice.com/index.php")

        cy.get('.login').click()

        // let,var,const javascript degiskenleri

        let email= faker.internet.email()  // fake bir mail olusturduk
        cy.get('#email_create').type(email)

        cy.get('#SubmitCreate > span').click()

        cy.wait(3000)

        cy.get('#id_gender1').click()

        let firstName = faker.name.firstName('female')
        cy.get('#customer_firstname').type(firstName)

        let lastName = faker.name.firstName()
        cy.get('#customer_lastname').type(lastName)

        let password = faker.internet.password()
        cy.get('#passwd').type(password)

        let address = faker.address.streetAddress()
        cy.get('#address1').type(address)

        let city = faker.city()
        cy.get('#city').type(city)

        cy.get('#id_state').select(1) // acılır menu den 1.yi secmesini istedik

        let postcode = faker.address.zipCode('#####') // 5 haneli yaptık #
        cy.get('#postcode').type(postcode)
        
        let phone = faker.phone.number('###-###-##-##')
        cy.get('#phone_mobile').type(phone)

        cy.get('#submitAccount > span').click


        cy.get('.account > span').should('include.text', firstname)

        cy.get('.account > span').should('include.text', lastname)

        

    })

})



