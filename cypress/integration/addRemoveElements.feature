Feature: Testing hover using http://the-internet.herokuapp.com/add_remove_elements/ test site

    Scenario: Verify user is able to add and delete an element
        Given user clicks the Add Element button
        When the manually added delete button appears
        And user clicks the delete button
        Then the delete button should not be visible

    Scenario: Verify user is able to add and delete multiple elements
        Given user clicks the Add Element button multiple times
        When the amount of visible manually added delete buttons equal the amount that the user clicked the Add Element button
        And the user clicks all the multiple delete buttons
        Then the delete button should not be visible

    Scenario Outline: Verify user is able to delete elements at different areas of the elements line when multiple are shown
        Given the Add Element button is clicked "<elementStartValue>" times
        When there are "<elementStartValue>" delete button visible
        Then user is able to delete the number "<elementInLineToDelete>" delete button in line
        And there are only "<elementEndValue>" delete buttons left
        Examples:
            | elementStartValue | elementInLineToDelete | elementEndValue |
            | 3                 | 2                     | 2               |
            | 6                 | 4                     | 5               |
            | 8                 | 8                     | 7               |


