Feature: Links view renders as expected

Confirms that the links view content renders as expected

Scenario: Clicking the Youtube link navigates the user to the correct URL
Given I visit the home page
When I click the home page sidebar 'links' button
And I click the link to YouTube
Then I am navigated to the website "https://www.youtube.com/channel/UCR4irx2OoqMu_WwKr5_BoMw"