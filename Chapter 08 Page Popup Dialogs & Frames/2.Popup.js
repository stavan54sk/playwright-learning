const { test } = require('@playwright/test');


test('page', async ({ page }) => {

    const popupPromise = page.waitForEvent('popup');

    await page.getByText('open the popup').click();

    const popup = await popupPromise;

    await popup.getByRole('button').click();

    console.log(await popup.title());


});


test('multiple pages', async ({ page, context }) => {

    page.on('popup', async popup => {

        await popup.waitForLoadState();

        console.log(await popup.title());

    });

});
