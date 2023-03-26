/// <references types="cypress"/>

describe('File Upload', () => {

/*
https://www.npmjs.com/package/cypress-file-upload  bu adresten plugin indirdik
npm install --save-dev cypress-file-upload bu plugin i terminalden install ettim

*/
/*
Eklemek istedigimiz dosyayı oncelikle masaustunde olusturdugumuz proje klasorumuzun icinden
Cypress icindeki fixtures dosyasına ekleriz ve bu otomatik olarak buradaji fixtures klasorunun altina gelir
sonrasinda da istersek dosyanin direkt yolunu ya da ismini kullanarak ekleme yapabiliriz
*/

// **** 1 DOSYA EKLEDIK ****

    it('Single File Upload', () => {

      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      cy.wait(3000)

      const path1="img1.jpg"  // ekleyeceğim dosyanin ismini girdim
      cy.get('#filesToUpload').attachFile(path1) // locate ini aldıgımız kısma dosyayı yükledik

      cy.get('#fileList > li').should('include.text','img1.jpg') // eklemis oldugumuz dosyanın locatini alip eklendiğini doğruladık (eklemnen dosya bu ismi iceriyor mu diye baktik)
      cy.get('#fileList > li').should('have.text','img1.jpg')
    })

    
    
    // **** 3 DOSYA EKLEDIK **** 1.YOL

    it('Multiple File Upload 1', () => {
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
         
        const path1="img1.jpg"  
        const path2="img2.jpg" 
        const path3="img3.jpg" 
        
        cy.get('#filesToUpload')
        .attachFile(path1).wait(2000)
        .attachFile(path2).wait(2000)
        .attachFile(path3).wait(2000)


    })

     // **** 3 DOSYA EKLEDIK **** 2.YOL DAHA KOLAY

    it('Multiple File Upload 2', () => {
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
         
        const path1="img1.jpg"  
        const path2="img2.jpg" 
        const path3="img3.jpg"

        cy.get('#filesToUpload').attachFile([path1,path2,path3])

        // ****  3 FARKLI DOGRULAMA YAPMIS OLDUK  ****
        cy.get('#fileList > :nth-child(1)').should('have.text','img1.jpg') // have.text birebir ayni olmak gerekir
        cy.get('#fileList > :nth-child(2)').should('contain.text','g2.jpg') // burada iceriyor  mu diye soruk
        cy.get('#fileList > :nth-child(3)').should('include.text','3.jpg') // burada da dosya ismi icinde 3.jpg bunu iceriyor mu diye sorduk
    
    
    })

    // Dosyayı eklerken ismini değiştirebiliyoruz (Bizim ana dosyamızın ismi değişmiyor yükleme yaptiğimiz sayfada değişiyor)
    it('OverWrite File Name', () => {
       
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1="img1.jpg" // bu dosyanin ismini
        cy.get('#filesToUpload').attachFile({filePath: path1, fileName: 'image01.jpg'}) // bu sekilde degistirmis olduk
   
    })
})