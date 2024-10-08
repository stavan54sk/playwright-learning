import { test, expect } from '@playwright/test';

test('screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev');
    // Intentionally cause a failure
    await expect(page).toHaveTitle('Wrong Title');

});

test('screenshot 2', async ({ page }) => {
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/');
    // Intentionally cause a failure
    // await expect(page).toHaveTitle('Wrong Title');

});
