@createOrderB2B
Feature: Add New External Vehicle
  As a operation office trac
  I want to add new external vehicles
  So that I can manage the vehicle inventory

  Scenario: As a user. i want to add vehicle external with submit mandatory fields
    Given Open browser fms trac rental
      And I login to TRAC B2C Insdustries
      And I navigate to menu create order
      When I input customer data
      And I input contract data
      And I input order type data
      And I input package type data
      And I input city name data
      And I input pick up and drop off date
      And I input pick up and drop off time
      And I add reservation
      # And I close browser
      # Then Open browser fms web
      # And I login to FMS
      And I close browser

  # Scenario: As a user. i want visit web without login and userd cookies browser
  #   Given Open browser fms trac rental
  #   When Set to dashboard trac web
  #   Then I navigate to menu create order
  #   And I input customer data
  #   And I close browser
