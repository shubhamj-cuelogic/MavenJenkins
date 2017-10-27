#Author: shubham.jain@cuelogic.co.in
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template

Feature: Login Action

Scenario: Successful Login with Valid Credentials by data table
	Given User is on Home Page
	When User Navigate to LogIn Page
	And User enters Credentials to LogIn
	Then Message displayed Login Successfully

Scenario: Successful Login with Valid Credentials by Maps in Data Tables
	Given User is on Home Page
	When User Navigate to LogIn Page
	And User enters Credentials to LogIns
	Then Message displayed Login Successfully

Scenario: Successful Login with Valid Credentials
	Given User is on Home Page
	When User Navigate to LogIn Page
	And User enters Credentials to LogIns
	Then Message displayed Login Successfully
    
Scenario: Successful LogOut
	When User LogOut from the Application
	Then Message displayed LogOut Successfullyy
	Then Asserts of JUnits
