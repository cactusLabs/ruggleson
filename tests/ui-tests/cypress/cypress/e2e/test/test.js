import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I visit the home page', () => {
    cy.visit('https://www.ruggleson.com');
});

Then('the url is {word}', (url) => {
    cy.url().should('eq', 'https://www.ruggleson.com');
});