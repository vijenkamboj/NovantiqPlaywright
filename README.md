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

Features
- Modular Page Object Model
- UI tests for login, logout, button states, and success/error messages
- API tests using request.newContext() for login validation
- Alias path support for cleaner imports
- HTML reporting and trace viewer
- Git integration for version control


Sample Test Cases
- ✔️ Valid login shows success message
- ❌ Invalid login shows error message
- 🔘 Login button is enabled
- 🔓 Logout redirects to login page
- 🌐 API login returns expected response

🔧 Tech Stack
- Playwright
- JavaScript (ES Modules)
- Node.js
- Git & GitHub




