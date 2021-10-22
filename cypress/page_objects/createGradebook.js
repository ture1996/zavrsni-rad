export default class CreateGradebookPage{
    get emailField (){
        return cy.get('#name');
    }
    get professorSelection(){
        return cy.get('#select');
    }
    get submitButton(){
        return cy.get('.btn-submit');
    }
    get cancelButton(){
        return cy.get('.btn-danger');
    }
    login(name, professor){
        this.emailField.type(name);
        this.professorSelection.select(professor);
        this.submitButton.click();
    }
}

export const createGradebookPage = new CreateGradebookPage();