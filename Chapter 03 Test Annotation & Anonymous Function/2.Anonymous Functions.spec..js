import { test, expect } from '@playwright/test';

test('should load homepage and check title', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');

//   In this example:
// •	The second argument of the test function is an anonymous function (a function without a name) that contains the steps of the test case.
// •	This structure ensures that each test case is isolated and can independently execute its steps without interference from other tests.

});

// Key Advantages of Using Anonymous Functions in Playwright
// •	Inline Logic for Each Test
// •	Access to Test Fixtures
// •	Test Isolation
// •	Asynchronous Code Handling

// Anonymous vs Named Functions

// •	Named Function: Useful for reusability across multiple tests but may lead to shared state issues if not carefully managed.
// typescript
// Copy code

async function sharedTestLogic(page) {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
}

test('test case 1', async ({ page }) => {
  await sharedTestLogic(page);
});

test('test case 2', async ({ page }) => {
  await sharedTestLogic(page);
});


// •	Anonymous Function: Ideal for encapsulating test logic within the scope of a single test case, ensuring test isolation.
// typescript
// Copy code
test('test case 1', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

test('test case 2', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

// Anonymous Functions for Asynchronous Code Flow

// Handling asynchronous operations like API calls, page loads, or form submissions is a common requirement in test automation. Anonymous functions in Playwright naturally support async/await, allowing you to structure the steps in your tests without running into callback hell:
// typescript
// Copy code

test('API data fetch and form submission', async ({ page }) => {
  await page.goto('https://example.com/form');
  
  // Wait for data to load asynchronously
  const data = await fetch('https://api.example.com/data');
  
  // Fill and submit form asynchronously
  await page.fill('#name', data.name);
  await page.click('#submit');
  
  const confirmationText = await page.textContent('#confirmation');
  expect(confirmationText).toBe('Form submitted successfully');
});

// This makes anonymous functions a natural fit for writing asynchronous tests where each step depends on the outcome of the previous one.



