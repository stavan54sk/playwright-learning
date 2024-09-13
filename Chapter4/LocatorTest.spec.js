const { test } = require('@playwright/test');

test('CSS Locator Test', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://www.facebook.com/login.php/");
    
   await  myPage.locator('[id="email"]').click();
    
   
});

test('Get By Alt Text Test', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://bonigarcia.dev/");
    
   await  myPage.getByAltText('Boni García').click();
    
   
});

test('Get By Placeholder', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://www.facebook.com/login/");
    
   await  myPage.getByPlaceholder('Email address or phone number').click();
    
   
});

test('Get By Role', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://www.facebook.com/login/");
    
   await  myPage.getByRole('password').click();
    
   
});

test('Get By Text Contains', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://www.facebook.com/login/");

    await myPage.getByText('Sign Up').click();


});

test('Get By Text Exact', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://www.facebook.com/login/");

    await myPage.getByText('Sign Up', { exact: true }).click();


});

test('Get By Label', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://www.facebook.com/login/");

    await myPage.getByLabel('Password').click();


});

test.only('Get By Title', async ({ browser }) => {
    const myContext = await browser.newContext();

    const myPage = await myContext.newPage();

    await myPage.goto("https://www.facebook.com/login/");

    await myPage.getByTitle('Log in to Facebook').click();


});