export default class LoginPage{
    get emailField (){
        return cy.get('#email');
    }
    get passwordField(){
        return cy.get('#userPassword');
    }
    get submitButton(){
        return cy.get('button[type="submit"]');
    }

    login(email, password){
        this.emailField.type(email);
        this.passwordField.type(password);
        this.submitButton.click();
    }
}

export const loginPage = new LoginPage();