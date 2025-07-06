# NovantiqPlaywright
My repo for playwright
Project structure
├── pages/               # Page Object classes (e.g., LoginPage.js)
├── tests/               # Spec files for UI and API tests
├── utility/               # Reusable helpers and config
├── playwright.config.js # Playwright configuration
├── README.md            # Project documentation

Install dependencies
npm install

Run all test 
npx playwright test

Run specific test 
npx playwright test tests/login.spec.js
or test.only

view HTML report
npx playwright show-report

view JSON report
{} report.json 

