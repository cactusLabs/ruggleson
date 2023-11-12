import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homepage from "../../pages/homepage";

Given("I visit the home page", () => {
    cy.visit('https://www.ruggleson.com');
});

Then("the home page header loads as expected", () => {
    cy.visit('https://www.ruggleson.com');
    homepage.elements.header_text().should('have.text', 'ruggles online');
});