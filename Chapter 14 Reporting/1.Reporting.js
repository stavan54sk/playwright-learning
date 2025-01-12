// 1. playwright.config.js (Inside config/)
// javascript
// Copy code
// const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 30000,
  reporter: [
    ['line'], 
    ['html', { outputFolder: 'html-report' }],
    ['./reporters/custom_reporter.js']
  ],
  use: {
    headless: true,
    baseURL: 'https://example.com',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});

// 2. example.test.js (Inside tests/)
// javascript
// Copy code
const { test, expect } = require('@playwright/test');

test.describe('Example Suite', () => {
  test('Sample Test', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    console.log(`Page Title: ${title}`);
    expect(title).not.toBeNull();
  });
});

// 3. custom_reporter.js (Inside reporters/)
// javascript
// Copy code
const { Reporter } = require('@playwright/test/reporter');

class CustomReporter extends Reporter {
  onBegin(config, suite) {
    console.log('Starting the run');
  }

  onTestBegin(test) {
    console.log(`Running test: ${test.title}`);
  }

  onTestEnd(test, result) {
    console.log(`Finished test: ${test.title} with status ${result.status}`);
  }

  onEnd(result) {
    console.log(`Test run finished with status: ${result.status}`);
  }
}

module.exports = CustomReporter;