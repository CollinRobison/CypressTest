Feature: Testing cypress by going to google

    Scenario: Verify user is able to type a work on google's search bar
        Given I visit the Google homepage
        When I type "Test" in the search bar
        Then "Test" appears in the search bar
