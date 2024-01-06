import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homepage from "../../pages/homepage";

/* Then */

Then("the home page header & content default renders as expected", () => {
    homepage.elements.header_text().should('have.text', 'ruggles online');
    homepage.elements.content_header_text().should('have.text', 'meanwhile, on windmill hill...');
});

Then("the 'contact' view should render as expected", () => {
    homepage.elements.header_text().should('have.text', 'ruggles online');
    homepage.elements.content_header_text().should('have.text', 'contact...');
});

Then("the 'links' view should render as expected", () => {
    homepage.elements.header_text().should('have.text', 'ruggles online');
    homepage.elements.content_header_text().should('have.text', 'links...');
});

Then("the 'news' view should render as expected", () => {
    homepage.elements.header_text().should('have.text', 'ruggles online');
    homepage.elements.content_header_text().should('have.text', 'news...');
});

/* When */

When("I click the home page sidebar 'contact' button", () => {
    homepage.click_sidebar_contact();
});

When("I click the home page sidebar 'news' button", () => {
    homepage.click_sidebar_news();
});

