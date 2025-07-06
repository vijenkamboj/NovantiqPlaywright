
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { invalid  } from '../utility/testData';

test('Login with invalid password shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(invalid.wrongPass.username, invalid.wrongPass.password);
  const error = await loginPage.getErrorMessage();
  expect(error).toContain('Your password is invalid!');
});

test('Login with blank username shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(invalid.blankUser.username, invalid.wrongPass.password);
  const error = await loginPage.getErrorMessage();
  expect(error).toContain('Your username is invalid!');
});