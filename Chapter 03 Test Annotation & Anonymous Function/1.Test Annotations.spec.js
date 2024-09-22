import { test, expect } from '@playwright/test';

test('should load homepage and check title', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});

test('my test', async ({ page }) => {
    // Inline Logic for Each Test Case: 
});


test('example test', async ({ page }) => {
    await page.goto('https://example.com');
    expect(await page.title()).toBe('Example Domain');
    // Access to Fixtures and Context: Playwright 
});

test('my async test', async ({ page }) => {
    await page.goto('https://example.com');
    // Other async operations
});

test.skip('skip this test for now', async ({ page }) => {
    await page.goto('https://example.com');
});

test.fixme('this test is under development', async ({ page }) => {
    await page.goto('https://example.com');
});

test.only('focus on this test', async ({ page }) => {
    await page.goto('https://example.com');
});

test.slow('this is a slow test', async ({ page }) => {
    await page.goto('https://example.com');
});

test('browser-specific test', async ({ page, browserName }) => {
    // Dynamic Annotations with Programmatic Control
    if (browserName === 'firefox') test.skip();
    await page.goto('https://example.com');
});

test.beforeEach(async ({ page }) => {
    // Hooks and Test Configuration
    await page.goto('https://example.com');
});

test('homepage has correct title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Example Domain');
});


