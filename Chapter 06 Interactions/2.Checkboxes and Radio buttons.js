import { test, expect, Page } from '@playwright/test';

test('toBeChecked checkbox', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.getByText('Default checkbox').check();

  await expect(page.getByText('Default checkbox')).toBeChecked();

});

test('toBeChecked radiobutton', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

  await page.getByText('Default radio').check();

  await expect(page.getByText('Default radio')).toBeChecked();

});