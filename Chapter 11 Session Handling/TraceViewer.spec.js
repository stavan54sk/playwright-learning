
import { test, expect } from '@playwright/test';

// Recording a trace locally

// To record a trace during development mode set the --trace flag to on when running your tests. You can also use UI Mode for a better developer experience.

// npx playwright test --trace on

// Opening the trace

// You can open the saved trace using the Playwright CLI or in your browser on trace.playwright.dev. Make sure to add the full path to where your trace.zip file is located.

// npx playwright show-trace path/to/trace.zip

// Viewing remote traces

// You can open remote traces using its URL. They could be generated on a CI run which makes it easy to view the remote trace without having to manually download the file.

// npx playwright show-trace https://example.com/trace.zip

test('test', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/index.html');
  await page.getByRole('link', { name: 'Web form' }).click();
  await page.getByLabel('Text input').click();
  await page.getByLabel('Text input').fill('testsapleinput');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testpassword');
  await page.getByLabel('Textarea').click();
  await page.getByLabel('Textarea').fill('mytextarea');
  await page.getByLabel('Readonly input').click();
  await page.getByText('Default checkbox').click();
});