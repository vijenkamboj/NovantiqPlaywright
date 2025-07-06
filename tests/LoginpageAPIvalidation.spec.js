import { test, expect, request } from '@playwright/test';
import { valid  } from '../utility/testData';

test('API login simulation with valid credentials', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post('https://practicetestautomation.com/practice-test-login/', {
    form: {
      username: valid.username, 
      password: valid.password
    }
  });

  expect(response.status()).toBe(200);
});