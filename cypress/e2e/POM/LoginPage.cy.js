class LoginPage{

    getUserNameBox(){
        return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.userName) // bana bu locatei return et
    }

    getPaswordBox(){
        return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.password)
    }

    getLoginButton(){
        return cy.get('.MuiButton-label')
    }

    getWelcomeTest(){
        return cy.get('.header__nav > :nth-child(1) > .header__lineOne')
    }

    getHeader(){
        return cy.get('.header__nav') // bu locate de 3 element var
    }
}
export default LoginPage