// Running Playwright with DevTools

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, devtools: true });
  const page = await browser.newPage();
  await page.goto('https://example.com');
})();
