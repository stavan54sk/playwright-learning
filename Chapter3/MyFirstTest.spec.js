const { test } = require('@playwright/test');

test('My First Playwright Test', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://github.com/stavan54sk/PlaywrightLearning");
    
    console.log(await myPage.title());

});


test.only('My Second Playwright Test', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://github.com/stavan54sk/PlaywrightLearning");
    
    console.log(await myPage.title());

});