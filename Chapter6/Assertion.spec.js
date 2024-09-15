const { test, expect } = require('@playwright/test');

test('To ave title', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await expect(page).toHaveTitle('Hands-On Selenium WebDriver with Java');
    
 });

 test('To Equal', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.waitForLoadState();

    const pageT=await page.title();

    expect(pageT).toEqual('Hands-On Selenium WebDriver with Java')

 });

 test('To Contain', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.waitForLoadState();

    const pageT=await page.title();

    expect(pageT).toContain('Selenium')

 });

 test('To Be Checked', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    
    await expect(page.locator('[id="my-check-1"]')).toBeChecked();

 });

 test('To Be Enabled', async ({ page }) => {

   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

   
  await expect(page.locator('[type="submit"]')).toBeEnabled();

});


test('To Be Visible', async ({ page }) => {

   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

   
  await expect(page.locator('[type="sumit"]')).toBeVisible();

});

test('To Contain Text', async ({ page }) => {

   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

   
  await expect(page.locator('[type="submit"]')).toContainText('Amit');

});

test('To have Count', async ({ page }) => {

   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

   
  await expect(page.locator('//option')).toHaveCount(9);

});

test('To have Text', async ({ page }) => {

   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

   
  await expect(page.locator('[type="submit"]')).toContainText('Submit');

});


test.only('To have Value', async ({ page }) => {

   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

   await page.locator('[id="my-text-id"]').fill('TestName');
   
  await expect(page.locator('[id="my-text-id"]')).toHaveValue('TestName');

});


test.only('To have url', async ({ page }) => {

   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

  
   
  await expect(page).toHaveURL('httpss://bonigarcia.dev/selenium-webdriver-java/web-form.html');

});



