# Test info

- Name: successful login
- Location: /app/tests/auth.spec.ts:3:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /home/swebot/.cache/ms-playwright/webkit-2158/pw_run.sh
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
>  3 | test('successful login', async ({ page }) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at /home/swebot/.cache/ms-playwright/webkit-2158/pw_run.sh
   4 |   await page.goto('https://ooobnal.testrail.io/');
   5 |   await page.fill('#name', 'VALID_USERNAME'); // Replace VALID_USERNAME with the actual username
   6 |   await page.fill('#password', 'VALID_PASSWORD'); // Replace VALID_PASSWORD with the actual password
   7 |   await page.click('#button_primary');
   8 |   // Add an assertion here to check for successful login,
   9 |   // for example, by looking for an element on the dashboard page
  10 |   // await expect(page.locator('#dashboard')).toBeVisible();
  11 | });
  12 |
  13 | test('failed login', async ({ page }) => {
  14 |   await page.goto('https://ooobnal.testrail.io/');
  15 |   await page.fill('#name', 'INVALID_USERNAME'); // Replace INVALID_USERNAME with an invalid username
  16 |   await page.fill('#password', 'INVALID_PASSWORD'); // Replace INVALID_PASSWORD with an invalid password
  17 |   await page.click('#button_primary');
  18 |   // Add an assertion here to check for the error message
  19 |   // For example, if the error message is displayed in a div with class 'error-message'
  20 |   // await expect(page.locator('div.error-message')).toBeVisible();
  21 | });
  22 |
```