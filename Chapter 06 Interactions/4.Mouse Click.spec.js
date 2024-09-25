import { test, expect, Page } from '@playwright/test';

test('click left', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html");

  await page.getByRole('button', { name: 'Use left-click here' }).click({ button: 'left' });

  await page.getByRole('link', { name: 'Something else here' }).click({ button: 'left' });


});

test('click right', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html");

  await page.getByRole('button', { name: 'Use right-click here' }).click({ button: 'right' });

  await page.getByRole('link', { name: 'Another action' }).click({ button: 'left' });

  // Shift + click
  // await page.getByText('Item').click({ modifiers: ['Shift'] });

});


test('dblclick', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html");

  await page.getByRole('button', { name: 'Use double-click here' }).dblclick();

  await page.getByRole('link', { name: 'Another action' }).click({ button: 'left' });

});

// test('hover', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/mouse-over.html");

//   await page.getByRole('img').nth(1).hover();

//   await expect(page.getByText('Compass')).toBeVisible();

// });

// test('force click', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByPlaceholder('Disabled input').click({ force: true });

// });

// test('dispatchEvent (programmatic click)', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByPlaceholder('Disabled input').dispatchEvent('click')

// });

// Click at coordinates (x=50, y=50) within the element

// const elementLocator = page.locator('canvas#myCanvas');

// await elementLocator.click({ position: { x: 50, y: 50 } });

// Click and hold for 1 second (1000 milliseconds)

// const buttonLocator = page.locator('button#hold');

// await buttonLocator.click({ delay: 1000 });

// Perform mouse down and up actions separately

// await page.mouse.move(100, 200);

// await page.mouse.down();  // Press the mouse button

// await page.mouse.up();    // Release the mouse button

// Force click the button, even if it’s hidden or covered by another element

// const hiddenButtonLocator = page.locator('button#hidden');

// await hiddenButtonLocator.click({ force: true });

// // Programmatically trigger the click event

// const buttonLocator = page.locator('button#programmatic');

// await buttonLocator.evaluate(button => button.click());


