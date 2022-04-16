Feature: Testing http://the-internet.herokuapp.com/checkboxes and Cypress's ability to handle checkboxes

    Scenario: Verify user can check first checkbox and leave the second one blank
        Given the first and second checkbox is unchecked
        When user checks the first checkbox
        Then the first checkbox is checked
        And the second checkbox is unchecked

    Scenario: Verify user can check second checkbox and leave the first one blank
        Given the first and second checkbox is unchecked
        When user checks the second checkbox
        Then the second checkbox is checked
        And the first checkbox is unchecked

    Scenario: Verify user can check both checkboxes
        Given the first and second checkbox is unchecked
        When user checks the first checkbox
        And user checks the second checkbox
        Then the first checkbox is checked
        And the second checkbox is checked

    Scenario: Verify user can uncheck both checkboxes
        Given the first and second checkbox is checked
        When user unchecks the first checkbox
        And user unchecks the second checkbox
        Then the first checkbox is unchecked
        And the second checkbox is unchecked
