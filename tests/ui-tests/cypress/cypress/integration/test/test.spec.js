import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I visit the website", () => {
    cy.visit('https://www.ruggleson.com');
});

Then("the url is {word}", (url) => {
    cy.url().should('eq', 'https://www.ruggleson.com');
});