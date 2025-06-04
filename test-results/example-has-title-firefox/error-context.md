# Test info

- Name: has title
- Location: /app/tests/example.spec.ts:3:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /home/swebot/.cache/ms-playwright/firefox-1482/firefox/firefox
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
>  3 | test('has title', async ({ page }) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at /home/swebot/.cache/ms-playwright/firefox-1482/firefox/firefox
   4 |   await page.goto('https://playwright.dev/');
   5 |   await expect(page).toHaveTitle(/Playwright/);
   6 | });
   7 |
   8 | test('get started link', async ({ page }) => {
   9 |   await page.goto('https://playwright.dev/');
  10 |   await page.getByRole('link', { name: 'Get started' }).click();
  11 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  12 | });
  13 |
```