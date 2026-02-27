@vehicleExternal
Feature: Add New External Vehicle
  As a operation office trac
  I want to add new external vehicles
  So that I can manage the vehicle inventory

  Scenario: As a user. i want to add vehicle external with submit mandatory fields
    Given Open browser fms web
      And I login to FMS
    When I navigate to vehicle master
      And I click on external tab
      And I click add new vehicle
      And I input vehicle data
      And I input vehicle type
      And I input vin number
      And I input license plate
      And I input engine number
      And I scroll to bottom of vehicle external form
      And I input vehicle year
      And I input fuel type
      And I input transmission type
      And I input vehicle date
      And I input business unit
    Then Save and submit vehicle external
      And I click on external tab
      And I verify vehicle creation
      And I close browser

  Scenario: As a user. i want to add vehicle external with non submit mandatory fields
    Given Open browser fms web
      And I login to FMS
    When I navigate to vehicle master
      And I click on external tab
      And I click add new vehicle
      And I input vehicle data
      And I input vehicle type
      And I input vin number
      And I input license plate
      And I input engine number
      And I scroll to bottom of vehicle external form
      And I input vehicle year
      And I input fuel type
      And I input transmission type
      And I input vehicle date
      And I input business unit
    Then Save and submit vehicle external
      And I click on external tab
      And I verify vehicle creation