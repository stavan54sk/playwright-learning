import { test, expect } from '@playwright/test';

test('load homepage and verify title', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');

    // •	The test function contains an asynchronous anonymous function (declared with async).
    // •	The await keyword is used before page.goto() and page.title() to ensure that Playwright waits for the page to fully load and the title to be retrieved before proceeding.

});

// ######## Key Scenarios for async and await in Playwright ########

// Navigating to Web Pages

// Waiting for Elements to Appear

// Handling Asynchronous Actions like Clicks and Inputs

// Performing Assertions After Async Operations

// ###########Playwright-Specific Asynchronous Features ###########

// Auto-Waiting in Playwright

// Parallel Execution and Asynchronous Isolation


// Here’s a simple example of how await handles a Promise:


test('handle a Promise', async ({ page }) => {

    // const response = await page.waitForResponse('https://api.example.com/data');

    // expect(response.status()).toBe(200);

});



// async/await vs. .then() 

test('then', async ({ page }) => {

    page.goto('https://example.com').then(() => {
        return page.title();
    }).then((title) => {
        expect(title).toBe('Example Domain');
    });

});

test('then', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});





