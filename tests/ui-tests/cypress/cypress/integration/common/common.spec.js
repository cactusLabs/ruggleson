import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homepage from "../../pages/homepage";

Given("I visit the home page", () => {
    cy.visit('https://www.ruggleson.com');
});

When("I click the home page sidebar 'links' button", () => {
    homepage.click_sidebar_links();
});