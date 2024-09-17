
import { test, expect } from '@playwright/test';

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