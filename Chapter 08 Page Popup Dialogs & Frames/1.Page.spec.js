const { test } = require('@playwright/test');


test('page', async ({ page, context }) => {

    const page = await context.newPage();

    await page.goto('http://example.com');

    await page.locator('#search').fill('query');

    await page.locator('#submit').click();

    console.log(page.url());

});


test('multiple pages', async ({ page, context }) => {

    // Create two pages
    const pageOne = await context.newPage();

    const pageTwo = await context.newPage();

    // Get pages of a browser context
    const allPages = context.pages();

});

test('handling new pages', async ({ page, context }) => {

    // Start waiting for new page before clicking. Note no await.
    const pagePromise = context.waitForEvent('page');

    await page.getByText('open new tab').click();

    const newPage = await pagePromise;

    // Interact with the new page normally.
    await newPage.getByRole('button').click();

    console.log(await newPage.title());

});

test('action trigger unknown for pages', async ({ page, context }) => {

    context.on('page', async page => {
        
        await page.waitForLoadState();
        
        console.log(await page.title());
      });

});






