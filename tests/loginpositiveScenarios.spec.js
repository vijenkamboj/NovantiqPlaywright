import { test, expect,request } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { valid  } from '../utility/testData';
import { LogoutPage } from '../pages/logoutPage';

test('Valid login shows success message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(valid.username, valid.password);
  await expect(page).toHaveURL(/.*logged-in-successfully/);
  const message = await loginPage.getSuccessMessage();
  expect(message).toContain('Logged In Successfully');
   });

   test.only('Validate that User can log out successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  await loginPage.goto();
  await loginPage.login(valid.username, valid.password);
  await logoutPage.logout();

  // Assert user is redirected to login page
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
 });


