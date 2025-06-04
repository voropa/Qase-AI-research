import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('https://ooobnal.testrail.io/');
  await page.fill('#name', 'm40936545@gmail.com');
  await page.fill('#password', 'R28Q>gb3rK.|');
  await page.click('#button_primary');
  // Using the selector provided by the user for successful login
  await expect(page.locator('a#navigation-user')).toBeVisible();
});

test('failed login', async ({ page }) => {
  await page.goto('https://ooobnal.testrail.io/');
  await page.fill('#name', 'random@example.com');
  await page.fill('#password', 'randompassword');
  await page.click('#button_primary');
  // Using the selector provided by the user for failed login
  await expect(page.locator('div.loginpage-message-title')).toBeVisible();
});
