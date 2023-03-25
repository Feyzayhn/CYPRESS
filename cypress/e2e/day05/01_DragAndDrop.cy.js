/// <references types="cypress"/>

describe('DragAndDrop 1', () => {   

    /*
      https://www.npmjs.com/package/@4tw/cypress-drag-drop  bu adresden plugin indirdik

      npm install --save-dev @4tw/cypress-drag-drop bu plugin indirildi
    */

    it('', () => {

    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    cy.wait(3000)

    cy.get('#column-a') // suruklenecek web elementin locate i
    .drag('#column-b')  // web elementin sürükleneceği yerin locate i

    })




    it('DragAndDrop 2', () => {

        const dataTransfer = new DataTransfer();
       
        
        cy.get('#column-a').trigger('dragstart', {
            dataTransfer
        })
        
        cy.get('#column-b').trigger('drop', {
            dataTransfer
        }) 
    })
})

// Drag And Drop ==> Surukle Birak 