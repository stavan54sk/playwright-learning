import { test, expect, Page } from '@playwright/test';

test('scroll', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/long-page.html");

  // await page.locator('//*[text()="Boni García"]').scrollIntoViewIfNeeded();

  // await page.waitForTimeout(5000)

  // await page.locator('//*[text()="Boni García"]').hover();

  // await page.mouse.wheel(0, 100);

  // Alternatively, programmatically scroll a specific element
  await page.locator('//*[text()="Boni García"]').evaluate(e => e.scrollTop += 1000);

  await page.waitForTimeout(5000)

});

// await page.mouse.wheel({ deltaY: 100 }); // Scrolls down by 100 pixels


// const elementLocator = page.locator('div#target'); // The element you want to scroll to
// await page.evaluate(element => element.scrollIntoView(), await elementLocator.elementHandle());


// await page.evaluate(() => {
//   window.scrollTo(0, 500); // Scrolls to 500 pixels down from the top
// });

// await page.keyboard.press('ArrowDown'); // Scrolls down
// await page.keyboard.press('PageDown'); // Scrolls down a full page

// const elementLocator = page.locator('div#target'); // The element you want to scroll into view
// await elementLocator.scrollIntoView(); // Scrolls the element into the visible area

// await page.touchscreen.tap(100, 100); // Tap to focus
// await page.touchscreen.swipe(100, 100, 100, 300); // Swipe down