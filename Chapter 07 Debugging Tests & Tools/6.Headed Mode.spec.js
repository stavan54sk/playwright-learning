// Running Tests in Headed Mode

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });  // Launches with UI
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
