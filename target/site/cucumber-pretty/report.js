$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A.LogIn_Test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: shubham.jain@cuelogic.co.in"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Testing Framework Action",
  "description": "",
  "id": "testing-framework-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Testing my Framework cases",
  "description": "",
  "id": "testing-framework-action;testing-my-framework-cases",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Test1",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Test2",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Test3",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps4.Test1()"
});
formatter.result({
  "duration": 92218932,
  "error_message": "java.lang.NullPointerException\r\n\tat pageobjects.Homepage.button_MyAccount(Homepage.java:44)\r\n\tat stepDefinition.Test_Steps4.Test1(Test_Steps4.java:38)\r\n\tat ✽.Given Test1(A.LogIn_Test.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Test_Steps4.Test2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Steps4.Test3()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42081887336,
  "status": "passed"
});
formatter.uri("LogIn_Test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: shubham.jain@cuelogic.co.in"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Successful Login with Valid Credentials by data table",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials-by-data-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters Credentials to LogIn",
  "keyword": "And "
});
formatter.match({
  "location": "Test_Steps.UserCheck()"
});
formatter.result({
  "duration": 93168421643,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps3.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 7416571402,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps3.user_enters_testuser__and_Test()"
});
formatter.result({
  "duration": 376890,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.Test_Steps3.user_enters_testuser__and_Test(Test_Steps3.java:36)\r\n\tat ✽.And User enters Credentials to LogIn(LogIn_Test.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 436311857,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Successful Login with Valid Credentials by Maps in Data Tables",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials-by-maps-in-data-tables",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.UserCheck()"
});
formatter.result({
  "duration": 3620779020,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps3.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 230275260,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps3.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 198258,
  "status": "passed"
});
formatter.after({
  "duration": 22471,
  "status": "passed"
});
});