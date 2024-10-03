import { test, expect } from '@playwright/test';

// test("mocks a fruit and doesn't call api", async ({ page }) => {
//   // Mock the API call before navigating
//   await page.route('**/api/v1/fruits', async route => {
//     const json = [{ name: 'Strawberry', id: 21 },
//       { name: 'Sapota', id: 20 }
//     ];
//     await route.fulfill({ json });
//   });
//   // Go to the page
//   await page.goto('https://demo.playwright.dev/api-mocking');
//   // Assert that the Strawberry fruit is visible

//   page.on('request', request => console.log('>>', request.method(), request.url()));
//   page.on('response', response => console.log('<<', response.status(), response.url()));
//   await expect(page.getByText('Strawberry')).toBeVisible();

//   await page.waitForTimeout(50000);
// });

// // test('gets the json from api and adds a new fruit', async ({ page }) => {
// //   // Get the response and add to it
// //   await page.route('*/**/api/v1/fruits', async route => {
// //     const response = await route.fetch();
// //     const json = await response.json();
// //     json.push({ name: 'Loquat', id: 100 });
// //     // Fulfill using the original response, while patching the response body
// //     await route.fulfill({ response, json });
// //   });
  
// //   // Go to the page
// //   await page.goto('https://demo.playwright.dev/api-mocking');
// //   // Assert that the new fruit is visible
// //   await expect(page.getByText('Loquat', { exact: true })).toBeVisible();
// // });


// // test('should use custom proxy on a new context', async ({ browser }) => {
// //   const context = await browser.newContext({
// //     proxy: {
// //       server: 'http://myproxy.com:3128',
// //     }
// //   });
// //   const page = await context.newPage();
// //   await context.close();
// // });

// // test('log all requests and responses', async ({ page }) => {
// //   // Subscribe to 'request' and 'response' events.
// //   page.on('request', request => console.log('>>', request.method(), request.url()));
// //   page.on('response', response => console.log('<<', response.status(), response.url()));

// //   await page.goto('https://example.com');
// // });

// // test('mock API endpoint', async ({ page }) => {
// //   await page.route('**/api/fetch_data', route => route.fulfill({
// //     status: 200,
// //     body: JSON.stringify({ data: 'testData' }),
// //   }));
// //   await page.goto('https://example.com');
// // });

// // test('abort image requests', async ({ page }) => {
// //   await page.route('**/*.{png,jpg,jpeg}', route => route.abort());
// //   await page.goto('https://example.com');
// // })

test('replay from HAR file', async ({ page }) => {
  // Replay API requests from HAR.
  await page.routeFromHAR('./demo.playwright.dev.har', {
    url: '*/**/api/v1/fruits',
    update: false,
  });
  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');
  // Assert that the Playwright fruit is visible
  await expect(page.getByText('Sapota', { exact: true })).toBeVisible();
});

// test('log websocket frames', async ({ page }) => {
//   page.on('websocket', ws => {
//     console.log(`WebSocket opened: ${ws.url()}`);ws.on('framesent', event => console.log('Frame sent:', event.payload));
//     ws.on('framereceived', event => console.log('Frame received:', event.payload));
//     ws.on('close', () => console.log('WebSocket closed'));
//   });
  
//   await page.goto('https://example.com');
// });