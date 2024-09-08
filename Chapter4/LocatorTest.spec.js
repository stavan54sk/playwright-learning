const { test } = require('@playwright/test');

test('CSS Locator Test', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://www.facebook.com/login.php/");
    
   await  myPage.locator('[id="email"]').click();
    
   
});

test.only('XPath Locator Test', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://www.facebook.com/login.php/");
    
   await  myPage.locator('//[@id="email"]').click();
    
   
});