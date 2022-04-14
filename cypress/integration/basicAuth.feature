Feature: Testing http://the-internet.herokuapp.com/basic_auth and Cypress's ability to handle basic authentication

    Scenario: Verify user is able to successfully login into the basic auth test site with correct credentials
        Given user enters correct credentials in the basic auth login prompt
        Then user should see the basic auth success message
