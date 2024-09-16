const {test} = require('@playwright/test');


test.describe('two tagged tests', {
    tag: '@smoke',
  }, () => {
    test('one', async ({ page }) => {
      // ...
      await page.goto('https://playwright.dev/docs/writing-tests#test-isolation');
    });
  
    test('two', async ({ page }) => {
      // ...
      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/');
    });
  });

  test('one', async ({ page }) => {
    // ...
    await page.goto('https://facebook.com');
  });


  


