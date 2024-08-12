Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: Login should be success
    And User enter the username as "username_valid"
    And User enter the password as "password_valid"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the username as "username_invalid"
    Given User enter the password as "password_invalid"
    When User click on the login button
    But Login should fail