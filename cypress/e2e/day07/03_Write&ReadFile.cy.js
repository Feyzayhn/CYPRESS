/// <references types="cypress"/>

describe('Write&Read File 2', () => {

    it('Write&Ride JSON File', () => {

        cy.writeFile('04_UserData.json',{
            name: 'Eliza',
            email: 'eliza@example.com'
          } )

          
        cy.readFile('04_UserData.json').then( (user) => {

            expect(user.name).to.equal('Eliza')
            expect(user.email).to.equal('eliza@example.com')

        })  

    })

   /*
       expect() => dogrulama yaparken kullanilabilir
       () => {}  fonksiyonlara isim vermezsek baska yerden kullanamayiz 
       (user) => {}  gibi isim verirsek ise dogrulama yaparken kullanabiliriz
   */
})