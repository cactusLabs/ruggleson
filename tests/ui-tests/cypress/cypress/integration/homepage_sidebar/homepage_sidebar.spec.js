import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homepage from "../../pages/homepage";

Then("the home page sidebar behaves as expected", () => {
    homepage.elements.header_text().should('have.text', 'ruggles online');
    homepage.elements.content_header_text().should('have.text', 'meanwhile, on windmill hill...');
    homepage.click_sidebar_news();
    homepage.elements.header_text().should('have.text', 'ruggles online');
    homepage.elements.content_header_text().should('have.text', 'news...');
    homepage.click_sidebar_links();
    homepage.elements.header_text().should('have.text', 'ruggles online');
    homepage.elements.content_header_text().should('have.text', 'links...');
    homepage.click_sidebar_contact();
    homepage.elements.header_text().should('have.text', 'ruggles online');
    homepage.elements.content_header_text().should('have.text', 'contact...');
});

