export default class AddProfessorPage{

    get enterNameField(){
        return cy.get('#input-default');
    }
    get enterLastNameField(){
        return cy.get('#input-default1');
    }
    get gradebookDropbox(){
        return cy.get('select')
    }
    get submitButton(){
        return cy.get('.btn-secondary')
    };
    get addProfessorButton(){
        return cy.get('a[href="/professors/create"]');
    }
    get addPictureButton(){
        return cy.get('.btn-image');
    }
    get cancelButton(){
        return cy.get('.btn-cancel');
    }
    get URLField(){
        return cy.get('#__BVID__45');
    }

    addProfessor(name, lastName, gradebook,image){
        this.enterNameField.type(name);
        this.enterLastNameField.type(lastName);
        this.gradebookDropbox.select(gradebook).first();
        this.addPictureButton.click();
        this.URLField.type(image);
        this.submitButton.click();
    }
}

export const addProfessorPage = new AddProfessorPage();