// To record a trace for the test run:

const { test } = require('@playwright/test');

test('Debug with Trace Viewer', async ({ page }) => {
  await page.tracing.start({ screenshots: true, snapshots: true });
  await page.goto('https://example.com');
  await page.click('text="More information"');
  await page.tracing.stop({ path: 'trace.zip' });
});

// Viewing the Trace

// npx playwright show-trace trace.zip
