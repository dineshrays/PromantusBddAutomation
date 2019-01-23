#-------------------------------------------------------------------------------------------------------------
# Author : Saravana Sabareesh V                                                               Reviewer    : Kamal
# Date   : 18-01-2019                                                              						Reviewed On : 18-01-2019
# Last Updated By:
# Last Updated On:
# Feature Name:
# Feature Description
# CR #1 :
#---------------------------------------------------------------------------------------------------------------------
@FunctionalTest
Feature: Title of your feature
  I want to use this template for my feature file

  @SmokeTest
  Scenario Outline: To login a valid user credentials
    Given User is in BDD Demo Login Page <Url>
    When User enters username in BDD Demo <UserName>
    And user enters password  in BDD Demo <Password>
    And user clicks on Login button
    ## Then Validate the username and password
    ## And user should be logged in
    Then user should be able to login successfully

    Examples: 
      | Url                                    | UserName  | Password |
      | http://164.164.39.5:5002/Account/Login | Promantus | bdd      |

  #| http://localhost:60854/Account/Login | Promantus | bdd      |
  @RegressionTest
  Scenario Outline: To login a invalid user credentials
    Given User is in BDD Demo Login Page <Url>
    When User enters username in BDD Demo <UserName>
    And user enters password  in BDD Demo <Password>
    And user clicks on Login button
    ## Then Validate the username and password
    ## And user should be logged in
    Then user should not be able to login successfully <Error>

    Examples: 
      | Url                                    | UserName  | Password | Error                         |
      | http://164.164.39.5:5002/Account/Login |           | bdd      | Username is required.         |
      | http://164.164.39.5:5002/Account/Login | Promantus |          | Password is required.         |
      | http://164.164.39.5:5002/Account/Login | Promant   | bdd      | Username or Pawword is wrong. |
