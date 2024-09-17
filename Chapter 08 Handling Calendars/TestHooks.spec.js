const { test, expect } = require('@playwright/test');


test.describe('My Hooks', () => {

    test.beforeAll('Launching Website Home Page', ({ page }) => {

       console.log('Starting Tests')

    })

    test.beforeEach('Going to WebForm  Page', ({ page }) => {

        page.goto('https://bonigarcia.dev/selenium-webdriver-java/index.html');

        page.locator('[href="web-form.html"]').click();

    })



    test('To have Value', async ({ page }) => {

        await page.locator('[id="my-text-id"]').fill('TestName');

        await expect(page.locator('[id="my-text-id"]')).toHaveValue('TestName');

    });


    test('To have url', async ({ page }) => {

        await expect(page).toHaveURL('httpss://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    });

    test.afterEach('Going back to Home Page', ({ page }) => {

        page.locator('[href="./index.html"]').click();

    })

    test.afterAll('Closing All', ({ page }) => {

        page.close();

    })


});
























