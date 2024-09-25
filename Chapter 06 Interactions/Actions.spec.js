import { test, expect, Page } from '@playwright/test';

// test('fill', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByLabel('Textarea').fill("MY TEXT AREA");

// });



// test('pressSequentially', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByPlaceholder('Type to search...').pressSequentially('New York')

// });

// test('press', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByRole('button', { name: 'Submit' }).press('Enter');

// });

// test('cntrl + delete', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByLabel('Textarea').fill('Control');

//   await page.getByLabel('Textarea').press('Control+A+Delete');

// });








// test('toBeChecked checkbox', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByText('Default checkbox').check();

//   await expect(page.getByText('Default checkbox')).toBeChecked();

// });

// test('toBeChecked radiobutton', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByText('Default radio').check();

//   await expect(page.getByText('Default radio')).toBeChecked();

// });

// test('selectOption select', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByLabel('Dropdown (select) Open this').selectOption('Two');

//   console.log(page.getByLabel('Dropdown (select) Open this').textContent());

// });

// test('datepicker', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   await page.getByText('Color picker').press('Tab');

//   await page.getByRole('cell', { name: '»' }).click();

//   await page.getByRole('cell', { name: '»' }).click();

//   await page.getByRole('cell', { name: '»' }).click();

//   await page.getByRole('cell', { name: '25' }).nth(1).click();

//   await page.getByLabel('Date picker').press("Tab");

// });












// test('click left', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html");

//   await page.getByRole('button', { name: 'Use left-click here' }).click({ button: 'left' });

//   await page.getByRole('link', { name: 'Something else here' }).click({ button: 'left' });


// });

// test('click right', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html");

//   await page.getByRole('button', { name: 'Use right-click here' }).click({ button: 'right' });

//   await page.getByRole('link', { name: 'Another action' }).click({ button: 'left' });

//   // Shift + click
//   // await page.getByText('Item').click({ modifiers: ['Shift'] });

// });


// test('dblclick', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html");

//   await page.getByRole('button', { name: 'Use double-click here' }).dblclick();

//   await page.getByRole('link', { name: 'Another action' }).click({ button: 'left' });

// });

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

test('scroll', async ({ page }) => {

  await page.goto("https://bonigarcia.dev/selenium-webdriver-java/long-page.html");

  // await page.locator('//*[text()="Boni García"]').scrollIntoViewIfNeeded();

  // await page.waitForTimeout(5000)

  // await page.locator('//*[text()="Boni García"]').hover();

  // await page.mouse.wheel(0, 100);

  // Alternatively, programmatically scroll a specific element
  await page.locator('//*[text()="Boni García"]').evaluate(e => e.scrollTop += 1000);

  await page.waitForTimeout(5000)

});




// test(' setInputFiles ', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   // Select a directory
//   await page.locator('[type="file"]').setInputFiles('C:/Users/DELL/PlaywrightLearning/images.jfif');

//   await page.waitForTimeout(5000)

// });

// test(' filechooser ', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   const fileChooserPromise = page.waitForEvent('filechooser');

//   await page.locator('[type="file"]').click();

//   const fileChooser = await fileChooserPromise;

//   await fileChooser.setFiles('C:/Users/DELL/PlaywrightLearning/images.jfif');

//   await page.waitForTimeout(5000)

// });


// test(' focus ', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//   // Select a directory
//   await page.getByLabel('Password').focus();

//   await page.waitForTimeout(5000)

// });











// test(' dragAndDrop ', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html");

//   await page.getByText('Draggable panel Drag me').dragTo(page.locator("#target"));

//   await page.waitForTimeout(5000)

// });

// test(' draggingManually ', async ({ page }) => {

//   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html");


//   await page.getByText('Draggable panel Drag me').hover();

//   await page.mouse.down();

//   await page.locator("#target").hover();

//   await page.mouse.up();

//   await page.waitForTimeout(5000)

// });

