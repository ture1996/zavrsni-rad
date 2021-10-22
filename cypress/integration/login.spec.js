/// < reference types="Cypress" />

import { loginPage } from './../page_objects/loginPage';

describe("login", () => {

    let correctEmail = "jturanjanin@gmail.com";
    let correctPassword = "ture1996";

    beforeEach("visit link", () => {
        cy.visit('/login');
        cy.url().should('contains', 'https://gradebook.vivifyideas.com');
    });

    it('login with valid credentials', () => {
        cy.intercept(
            "POST",
            "https://gradebook-api.vivifyideas.com/api/login",
        ).as("validLogin");
        loginPage.login(correctEmail, correctPassword);
    })
});