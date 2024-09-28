const { test } = require('@playwright/test');


test('frameLocator', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/frames.html');

    await page.frameLocator('frame[name="frame-footer"]').getByRole('link', { name: 'Boni García' })

});

test('contentFrame', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/frames.html');

    await page.locator('(//frame)[3]').contentFrame().getByRole('link', { name: 'Boni García' }).click();

});

test('owner', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/frames.html');

    await page.frameLocator('//frame').first().owner().getByText('Hands-On Selenium WebDriver with Java Practice site').click();


});


