import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import links from "../../pages/links";

When("I click the link to LinkedIn", () => {
    links.click_linkedin_link();
});

When("I click the link to YouTube", () => {
    links.click_youtube_link();
});

Then("I am navigated to the website {string}", (url) => {
    let domainName = String(url.split(' ').map(el => el.split('.')[1])).trim();
    switch (domainName) {
        case "github":
            cy.url().should('be', 'https://github.com/cactusLabs');
            break;
        case "linkedin":
            cy.url().should('include', 'nerf')
            break;
        case "youtube":
            // Cypress Runner hits YT consent page, so for now just confirm
            // that user is directed to the correct domain
            cy.url().should('include', '.youtube.com/');
            break;
        default:
            cy.contains("ERROR: domain not recognised").should('not.exist')
    }
});