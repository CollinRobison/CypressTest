Feature: Testing hover using http://the-internet.herokuapp.com/hovers test site

    Background:
        Given I visit the Hover test site

    Scenario: Verify user is able to click the link for the first user and get redirected to their correct page (this will only work using chromium based browsers)
        Given I hover the first profile
        When the Profile Name and Profile link is showing with the first User
        Then user clicks the profile link for the first user
        And user should be on the first user profile page

    Scenario: Verify user is able to click the link for the first user and get redirected to their correct page (this will only work using chromium based browsers)
        Given I hover the second profile
        When the Profile Name and Profile link is showing with the second User
        Then user clicks the profile link for the second user
        And user should be on the second user profile page

    Scenario: Verify user is able to click the link for the third user and get redirected to their correct page (this will only work using chromium based browsers)
        Given I hover the third profile
        When the Profile Name and Profile link is showing with the third User
        Then user clicks the profile link for the third user
        And user should be on the third user profile page