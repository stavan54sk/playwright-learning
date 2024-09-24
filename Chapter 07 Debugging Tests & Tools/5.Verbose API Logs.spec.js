// Capturing API Logs

const { test } = require('@playwright/test');

test('Verbose API logs example', async ({ page }) => {
  page.on('request', request => console.log(`Request: ${request.url()}`));
  page.on('response', response => console.log(`Response: ${response.status()} from ${response.url()}`));

  await page.goto('https://example.com');
  await page.click('text="More information"');
});
