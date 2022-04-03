Feature: Testing hover using http://the-internet.herokuapp.com/hovers test site

    Background:
        Given I visit the Hover test site

    Scenario: Verify user is to see user 1 when you hover over their profile (this will only work using chromium based browsers)
        When I hover the profile
