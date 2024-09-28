const { test, expect } = require('@playwright/test');


test('alert', async ({ page }) => {

    page.on('dialog', dialog => dialog.accept());

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html');

    await page.getByRole('button', { name: 'Alert' }).click();

  });


test.only('confirm', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html');

    await page.waitForLoadState();

    page.on('dialog', dialog => dialog.accept());

    await page.getByRole('button', { name: 'Launch confirm' }).click();
});


test.only('prompt', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html');

    await page.waitForLoadState();

    page.on('dialog', dialog => dialog.accept('MY TYPE'));

    await page.getByRole('button', { name: 'Launch prompt' }).click();

});

test.only('modal', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html');

    await page.waitForLoadState();

    await page.getByRole('button', { name: 'Launch modal' }).click();

    await page.locator('[class="btn btn-primary model-button"]').click();

});




