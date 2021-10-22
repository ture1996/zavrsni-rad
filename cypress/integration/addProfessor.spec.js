/// < reference types="Cypress" />

import { addProfessorPage } from './../page_objects/addProfessorPage';
import { loginPage } from './../page_objects/loginPage';
const faker = require('faker');

describe("add new professor", () => {

    let userData = {
        name: faker.name.firstName(),
        lastName: faker.name.lastName()
    }

    it("log into the app and go to add professor page", () => {
        cy.visit('/login');
        loginPage.login(Cypress.env('validEmail'), Cypress.env('validPassword'));
        cy.wait(400);
        addProfessorPage.addProfessorButton.click();
    })
    it("add new professor", () => {
        addProfessorPage.addProfessor(userData.name, userData.lastName,'218', 'https://jovo.jpg');
    })
});