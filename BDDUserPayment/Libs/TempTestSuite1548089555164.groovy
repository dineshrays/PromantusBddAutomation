import com.kms.katalon.core.logging.KeywordLogger
import com.kms.katalon.core.exception.StepFailedException
import com.kms.katalon.core.reporting.ReportUtil
import com.kms.katalon.core.main.TestCaseMain
import com.kms.katalon.core.testdata.TestDataColumn
import groovy.lang.MissingPropertyException
import com.kms.katalon.core.testcase.TestCaseBinding
import com.kms.katalon.core.driver.internal.DriverCleanerCollector
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.configuration.RunConfiguration
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import internal.GlobalVariable as GlobalVariable

Map<String, String> suiteProperties = new HashMap<String, String>();


suiteProperties.put('id', 'Test Suites/Release-1.0/BVT')

suiteProperties.put('name', 'BVT')

suiteProperties.put('description', '')
 

DriverCleanerCollector.getInstance().addDriverCleaner(new com.kms.katalon.core.webui.contribution.WebUiDriverCleaner())
DriverCleanerCollector.getInstance().addDriverCleaner(new com.kms.katalon.core.mobile.contribution.MobileDriverCleaner())
DriverCleanerCollector.getInstance().addDriverCleaner(new com.kms.katalon.core.cucumber.keyword.internal.CucumberDriverCleaner())



RunConfiguration.setExecutionSettingFile("C:\\Users\\Promantus Inc\\Katalon Studio\\BDDUserPayment\\Reports\\Release-1.0\\BVT\\20190121_222235\\execution.properties")

TestCaseMain.beforeStart()

TestCaseMain.startTestSuite('Test Suites/Release-1.0/BVT', suiteProperties, [new TestCaseBinding('Test Cases/TC_SmokeTest', 'Test Cases/TC_SmokeTest',  null), new TestCaseBinding('Test Cases/FunctionalTestCases/FY19/Sprint1/TC_AddSwiftCode', 'Test Cases/FunctionalTestCases/FY19/Sprint1/TC_AddSwiftCode',  null), new TestCaseBinding('Test Cases/FunctionalTestCases/FY19/Sprint2/TC_AddCaptchaDetails', 'Test Cases/FunctionalTestCases/FY19/Sprint2/TC_AddCaptchaDetails',  null)])
