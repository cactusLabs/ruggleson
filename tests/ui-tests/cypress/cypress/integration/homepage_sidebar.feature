Feature: Home page sidebar behaves as expected

Confirms that the home pages sidebar buttons navigate user as expected

Scenario: Home page sidebar behaves as expected
Given I visit the home page
Then the home page header & content default renders as expected

Scenario: Home page sidebar 'contact' button behaves as expected
Given I visit the home page
When I click the home page sidebar 'contact' button
Then the 'contact' view should render as expected

Scenario: Home page sidebar 'links' button behaves as expected
Given I visit the home page
When I click the home page sidebar 'links' button
Then the 'links' view should render as expected

Scenario: Home page sidebar 'news' button behaves as expected
Given I visit the home page
When I click the home page sidebar 'news' button
Then the 'news' view should render as expected 