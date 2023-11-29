import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homepage from "../../pages/homepage";

Then("the home page footer loads as expected", () => {
    homepage.elements.footer_text().should('have.text', 'copyright \xA9 2023 john ruggles, cactus labs. all rights reserved.');
});

Then("the home page header loads as expected", () => {
    cy.visit('https://www.ruggleson.com');
    homepage.elements.header_text().should('have.text', 'ruggles online');
});

Then("the home page logo image loads as expected", () => {
    homepage.elements.logo_image().should('be.visible')
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
            expect($img[0].naturalHeight).to.be.greaterThan(0);
        });
});

Then("the home page sidebar loads as expected", () => {
    homepage.elements.sidebar_news().should('have.text', 'news');
    homepage.elements.sidebar_links().should('have.text', 'links');
    homepage.elements.sidebar_contact().should('have.text', 'contact');
});
