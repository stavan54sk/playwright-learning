// To use the Inspector, add the await page.pause() line in your test:

const { test } = require('@playwright/test');

test('Debug with Playwright Inspector', async ({ page }) => {
  await page.goto('https://example.com');
  await page.pause();  // Opens Playwright Inspector
  await page.click('text="More information"');
});

// To open Playwright Inspector:

// npx playwright test --debug
