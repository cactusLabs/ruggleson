import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import links from "../../pages/links";

When("I click the link to YouTube", () => {
    links.click_youtube_link();
});

Then("I am navigated to the website {string}", (url) => {
    driver.getCurrentUrl().should('eq', 'https://www.youtube.com/channel/UCR4irx2OoqMu_WwKr5_BoMw');
});