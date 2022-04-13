Feature: Testing hover using http://the-internet.herokuapp.com/add_remove_elements/ test site

    Background:
        Given I visit the Add Remove Elements test site

    Scenario: Verify user is able to add an element
        Given user clicks the Add Element button
        Then the manually added delete button will show

    Scenario: Verify user is able to delete an element
        Given user clicks the Add Element button
        When the manually added delete button appears
        And user clicks the delete button
        Then the delete button should not be visible


