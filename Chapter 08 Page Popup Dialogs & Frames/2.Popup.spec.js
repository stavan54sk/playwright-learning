const { test } = require('@playwright/test');


test('page', async ({ page }) => {

    await page.goto('http://example.com');

    const popupPromise = page.waitForEvent('popup');

    await page.getByText('open the popup').click();

    const popup = await popupPromise;

    await popup.getByRole('button').click();

    console.log(await popup.title());


});


test('multiple pages', async ({ page, context }) => {

    await page.goto('http://example.com');

    page.on('popup', async popup => {

        await popup.waitForLoadState();

        console.log(await popup.title());

    });

});
