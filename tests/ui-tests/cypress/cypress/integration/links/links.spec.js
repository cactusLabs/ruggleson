import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import links from "../../pages/links";

When("I click the link to GitHub", () => {
    links.click_github_link();
});

When("I click the link to LinkedIn", () => {
    links.click_linkedin_link();
});

When("I click the link to YouTube", () => {
    links.click_youtube_link();
});

Then("I am navigated to the website {string}", (url) => {
    const { hostname } = new URL(url);
    switch (String(hostname)) {
        case "github.com":
            cy.url().should('equal', 'https://github.com/cactusLabs');
            break;
        case "www.linkedin.com":
            // Cypress Runner hits an exception as a result of state - auth
            // modal renders - but test passes based upon asserted url
            cy.url().should('equal', 'https://www.linkedin.com/in/john-ruggles-4437b3120/')
            break;
        case "www.youtube.com":
            // Cypress Runner hits YT consent page, so for now just confirm
            // that user is directed to the correct domain
            cy.url().should('include', '.youtube.com/');
            break;
        default:
            cy.contains("ERROR: domain not recognised").should('not.exist')
    }
});