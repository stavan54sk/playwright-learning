import { test } from '@playwright/test';

// Configure the tests within this describe block to run in parallel
// test.describe.configure({ mode: 'parallel' });

// test('parallel test 1 - Navigate to Playwright site', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.waitForSelector('text=Get Started');
// });

// test('parallel test 2 - Check title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const title = await page.title();
//   test.expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
// });

// test('parallel test 3 - Check ', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
 
// });

// npx playwright test --workers=4

// test.describe.configure({ mode: 'serial' });

// test('first test - Perform login', async ({ page }) => {
//   await page.goto('https://example.com/login');
//   await page.fill('#username', 'user1');
//   await page.fill('#password', 'password1');
//   await page.click('button[type=submit]');
// });

// test('second test - Access dashboard after login', async ({ page }) => {
//   await page.goto('https://example.com/dashboard');
//   const welcomeMessage = await page.locator('text=Welcome, user1');
//   test.expect(welcomeMessage).toBeVisible();
// });


// test.describe('Serial Test Group', () => {
//   test.describe.configure({ mode: 'serial' });

//   test('runs first - Setup test environment', async ({ page }) => {
//     await page.goto('https://example.com/setup');
//   });

//   test('runs second - Verify setup results', async ({ page }) => {
//     const setupStatus = await page.locator('text=Setup complete');
//     test.expect(setupStatus).toBeVisible();
//   });
// });

// Group of tests that run in parallel
// test.describe.configure({ mode: 'parallel' });

// test('parallel test 1 - Perform actions', async ({ page }) => {
//   await page.goto('https://example.com/action1');
// });

// test('parallel test 2 - Perform another action', async ({ page }) => {
//   await page.goto('https://example.com/action2');
// });

// npx playwright test --workers=1

// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   workers: 1, // Disable parallel execution across the project
// });

// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   maxFailures: process.env.CI ? 10 : undefined, // Stop after 10 failures
// });