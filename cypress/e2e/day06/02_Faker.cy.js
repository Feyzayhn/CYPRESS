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

        let firstname = faker

    })

})