import { test, expect } from '@playwright/test';

// test('my visual testing', async ({ page }) => {
//   await page.goto('https://playwright.dev/docs/test-snapshots');
//   await expect(page).toHaveScreenshot();
// });


test('max Diff Pixels visual testing', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-snapshots');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 },);
});
