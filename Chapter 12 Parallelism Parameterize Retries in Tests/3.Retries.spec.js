const { test, expect } = require('@playwright/test');

// Configure the test suite to run in serial mode to ensure tests run in order
test.describe.configure({ mode: 'serial' });

/** @type {import('@playwright/test').Page} */
let page;

// Setup: Reuse a single page instance across tests
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

// First test - this one is expected to pass
test('first good', async () => {
  await page.goto('https://playwright.dev/');
  const title = await page.title();
  expect(title).toBe('Playwright');
});

// Second test - intentionally flaky, may fail initially but should pass on retry
test('second flaky', async () => {
  const randomValue = Math.random();
  expect(randomValue).toBeGreaterThan(0.5); // Randomly may fail
});

// Third test - also expected to pass
test('third good', async () => {
  await page.goto('https://playwright.dev/');
  await page.getByText('Get Started').click();
  const header = await page.textContent('h1');
  expect(header).toContain('Playwright enables reliable end-to-end testing for modern web apps.');
});