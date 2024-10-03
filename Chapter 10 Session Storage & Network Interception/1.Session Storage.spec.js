// import { test, expect } from '@playwright/test';

// test('Manipulate session storage', async ({ page }) => {
//   // Navigate to the application page
//   await page.goto('https://example.com');

//   // Set a session storage item
//   await page.evaluate(() => {
//     sessionStorage.setItem('sessionKey', 'sessionValue');
//   });

//   // Retrieve the session storage item and verify its value
//   const sessionValue = await page.evaluate(() => sessionStorage.getItem('sessionKey'));
//   expect(sessionValue).toBe('sessionValue');

//   // Remove the session storage item
//   await page.evaluate(() => {
//     sessionStorage.removeItem('sessionKey');
//   });

//   // Verify that the item is removed
//   const removedSessionValue = await page.evaluate(() => sessionStorage.getItem('sessionKey'));
//   expect(removedSessionValue).toBeNull();
// });
