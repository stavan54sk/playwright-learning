import { test, expect, Page } from '@playwright/test';

test('fill', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.getByLabel('Textarea').fill("MY TEXT AREA");

});


test('type', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.getByLabel('Textarea').type("MY TEXT AREA");

});


test('press', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.getByRole('button', { name: 'Submit' }).press('Enter');

});


test('pressSequentially', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.getByPlaceholder('Type to search...').pressSequentially('New York')

});


test('focus type', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.getByLabel('Textarea').focus();
  await page.keyboard().type('MY TEXT AREA');

});


test('keyboard press', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.keyboard.press('Enter');

});


test('evaluateHandle', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.evaluate(() => document.querySelector('input#name').value = 'John Doe');

});


test('cntrl + delete', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.getByLabel('Textarea').fill('Control');

  await page.getByLabel('Textarea').press('Control+A+Delete');

});