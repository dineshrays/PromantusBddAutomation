$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Promantus Inc/Katalon Studio/BDDUserPayment/Include/features/MakePayment.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To make a payment with valid Payment details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is in BDD Demo Login Page \u003cUrl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username in BDD Demo \u003cUserName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enters password  in BDD Demo \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is redirected to paybill page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters dayofpayment",
  "keyword": "And "
});
formatter.step({
  "name": "user enters amount",
  "keyword": "And "
});
formatter.step({
  "name": "user enters SwiftCode",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on make payment",
  "keyword": "When "
});
formatter.step({
  "name": "user is redirected to otp page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the otp",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on submit otp",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the payment successful page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Url",
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "http://164.164.39.5:5002/Account/Login",
        "Promantus",
        "bdd"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To make a payment with valid Payment details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is in BDD Demo Login Page http://164.164.39.5:5002/Account/Login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_in_BDD_Demo_Login_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username in BDD Demo Promantus",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_in_BDD_Demo(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to set text \u0027Promantus\u0027 of object \u0027Object Repository/bddDemo_Login/input_Username_Username\u0027 (Root cause: org.openqa.selenium.NoSuchWindowException: Unable to find elements on closed window\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:07:36.161Z\u0027\nSystem info: host: \u0027G10PROLT021\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CInternetExplorerDriver\nCapabilities {acceptInsecureCerts: false, browserName: internet explorer, browserVersion: 11, javascriptEnabled: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, se:ieOptions: {browserAttachTimeout: 0, elementScrollBehavior: 0, enablePersistentHover: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.fileUploadDialogTimeout: 3000, ie.forceCreateProcessApi: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:22736/, nativeEvents: true, requireWindowFocus: false}, setWindowRect: true}\nSession ID: 9c3cd0ff-8012-46f7-aa06-cf97e288b9b8\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027Username\u0027]})\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:950)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$1.call(Unknown Source)\r\n\tat bddDemo.LoginStepDef.user_enters_username_in_BDD_Demo(LoginStepDef.groovy:64)\r\n\tat ✽.User enters username in BDD Demo Promantus(C:/Users/Promantus Inc/Katalon Studio/BDDUserPayment/Include/features/MakePayment.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters password  in BDD Demo bdd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_password_in_BDD_Demo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is redirected to paybill page",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_is_redirected_to_paybill_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters dayofpayment",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_dayofpayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters amount",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters SwiftCode",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_SwiftCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on make payment",
  "keyword": "When "
});
formatter.match({
  "location": "MakePaymentStepDef.user_clicks_on_make_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is redirected to otp page",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_is_redirected_to_otp_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the otp",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_the_otp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit otp",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_clicks_on_submit_otp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see the payment successful page",
  "keyword": "Then "
});
formatter.match({
  "location": "MakePaymentStepDef.user_should_see_the_payment_successful_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "To make a payment with Invalid Payment details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "name": "User is in BDD Demo Login Page \u003cUrl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username in BDD Demo \u003cUserName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enters password  in BDD Demo \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is redirected to paybill page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters dayofpayment",
  "keyword": "And "
});
formatter.step({
  "name": "user enters amount",
  "keyword": "And "
});
formatter.step({
  "name": "user enters SwiftCode",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on make payment",
  "keyword": "When "
});
formatter.step({
  "name": "user is redirected to otp page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the otp",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on submit otp",
  "keyword": "And "
});
formatter.step({
  "name": "user should see the validation message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Url",
        "UserName",
        "Password",
        "errormsg"
      ]
    },
    {
      "cells": [
        "http://164.164.39.5:5002/Account/Login",
        "",
        "bdd",
        "Inva;id User Name"
      ]
    },
    {
      "cells": [
        "http://localhost:60854/Account/Login",
        "Promantus",
        "",
        "Invalid Passward"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To make a payment with Invalid Payment details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "name": "User is in BDD Demo Login Page http://164.164.39.5:5002/Account/Login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_in_BDD_Demo_Login_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username in BDD Demo ",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_in_BDD_Demo(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to set text \u0027\u0027 of object \u0027Object Repository/bddDemo_Login/input_Username_Username\u0027 (Root cause: org.openqa.selenium.NoSuchWindowException: Unable to find elements on closed window\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:07:36.161Z\u0027\nSystem info: host: \u0027G10PROLT021\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CInternetExplorerDriver\nCapabilities {acceptInsecureCerts: false, browserName: internet explorer, browserVersion: 11, javascriptEnabled: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, se:ieOptions: {browserAttachTimeout: 0, elementScrollBehavior: 0, enablePersistentHover: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.fileUploadDialogTimeout: 3000, ie.forceCreateProcessApi: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:34084/, nativeEvents: true, requireWindowFocus: false}, setWindowRect: true}\nSession ID: 3d3b016b-88d4-4293-a49e-0e2baf05ad25\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027Username\u0027]})\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:950)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$1.call(Unknown Source)\r\n\tat bddDemo.LoginStepDef.user_enters_username_in_BDD_Demo(LoginStepDef.groovy:64)\r\n\tat ✽.User enters username in BDD Demo (C:/Users/Promantus Inc/Katalon Studio/BDDUserPayment/Include/features/MakePayment.feature:40)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters password  in BDD Demo bdd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_password_in_BDD_Demo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is redirected to paybill page",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_is_redirected_to_paybill_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters dayofpayment",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_dayofpayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters amount",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters SwiftCode",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_SwiftCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on make payment",
  "keyword": "When "
});
formatter.match({
  "location": "MakePaymentStepDef.user_clicks_on_make_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is redirected to otp page",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_is_redirected_to_otp_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the otp",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_the_otp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit otp",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_clicks_on_submit_otp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see the validation message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "To make a payment with Invalid Payment details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@NegativeScenario"
    }
  ]
});
formatter.step({
  "name": "User is in BDD Demo Login Page http://localhost:60854/Account/Login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_in_BDD_Demo_Login_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username in BDD Demo Promantus",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_in_BDD_Demo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password  in BDD Demo ",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_password_in_BDD_Demo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to paybill page",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_is_redirected_to_paybill_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters dayofpayment",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_dayofpayment()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to set text \u002711/01/2019\u0027 of object \u0027Object Repository/bddDemo_MakePayment/input_DayOfPayment_DayOfPaymen\u0027 (Root cause: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/bddDemo_MakePayment/input_DayOfPayment_DayOfPaymen\u0027 located by \u0027By.xpath: //input[@id\u003d\u0027DayOfPayment\u0027]\u0027 not found)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:950)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat bddDemo.MakePaymentStepDef.user_enters_dayofpayment(MakePaymentStepDef.groovy:62)\r\n\tat ✽.user enters dayofpayment(C:/Users/Promantus Inc/Katalon Studio/BDDUserPayment/Include/features/MakePayment.feature:44)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters amount",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters SwiftCode",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_SwiftCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on make payment",
  "keyword": "When "
});
formatter.match({
  "location": "MakePaymentStepDef.user_clicks_on_make_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is redirected to otp page",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_is_redirected_to_otp_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the otp",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_enters_the_otp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit otp",
  "keyword": "And "
});
formatter.match({
  "location": "MakePaymentStepDef.user_clicks_on_submit_otp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see the validation message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});