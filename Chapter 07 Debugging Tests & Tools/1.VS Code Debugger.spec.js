// •	In VS Code, press Ctrl + Shift + P and search for “Debug: Open launch.json”.
// •	Add the following configuration for debugging Playwright tests:
// {
//     "version": "0.2.0",
//     "configurations": [
//       {
//         "name": "Debug Playwright Tests",
//         "type": "node",
//         "request": "launch",
//         "program": "${workspaceFolder}/node_modules/.bin/playwright",
//         "args": ["test"],
//         "console": "integratedTerminal",
//         "internalConsoleOptions": "neverOpen"
//       }
//     ]
//   }

// Inspecting Variables and Flow Control

const { test, expect } = require('@playwright/test');

test('Example VS Code Debugger Test', async ({ page }) => {
  await page.goto('https://example.com');
  
  const title = await page.title();
  console.log(title);  // Set a breakpoint here to inspect the title

  expect(title).toBe('Example Domain');
});

// Headed Mode for Visual Debugging

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await browser.close();
})();


  