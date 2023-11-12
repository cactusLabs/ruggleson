import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("I visit the home page", () => {
    cy.visit('https://www.ruggleson.com');
});