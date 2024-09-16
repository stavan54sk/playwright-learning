const { test, expect } = require('@playwright/test');
const { Module } = require('module');

// Running tests Headless Mode
// npx playwright test

// Running tests Head Mode
// npx playwright test --headed

// Running tests UI Mode
// npx playwright test --ui

// Run tests on different browsers
// npx playwright test --project firefox

// Run specific tests
// To run a single test file, pass in the name of the test file that you want to run.

// npx playwright test landing-page.spec.ts

// To run a set of test files from different directories, pass in the names of the directories that you want to run the tests in.

// npx playwright test tests/todo-page/ tests/landing-page/

// To run files that have landing or login in the file name, simply pass in these keywords to the CLI.

// npx playwright test landing login

// To run a test with a specific title, use the -g flag followed by the title of the test.

// npx playwright test -g "add a todo item"

// Run last failed tests
// To run only the tests that failed in the last test run, first run your tests and then run them again with the --last-failed flag.

// npx playwright test --last-failed

test('Fill', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.getByLabel('Password').fill('test');

    await page.waitForTimeout(5000);

}
);


