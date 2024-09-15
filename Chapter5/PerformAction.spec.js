const { test } = require('@playwright/test');

test('Navigation and Interaction', async ({ page }) => {

    await page.goto('https://www.facebook.com/login/');

    await page.getByRole('link', { name: 'Forgotten account?' }).click();

}
);


test('Checkbox', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.getByRole('checkbox',{name:'Checked checkbox'}).check();

}
);


test('Click', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.getByRole('checkbox',{name:'Checked checkbox'}).click();

}
);

test('Uncheck', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.getByRole('checkbox',{name:'Checked checkbox'}).uncheck();

}
);



test('Mouse Hover', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/mouse-over.html');

    await page.hover('(//img)[2]');

    (await page.waitForSelector('//p[text()="Compass"]')).isVisible();

    await page.waitForTimeout(5000);

}
);


test('Fill', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.getByLabel('Password').fill('test');

    await page.waitForTimeout(5000);

}
);

test('Focus', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.locator('[name="my-textarea"]').focus();

    await page.locator('#my-text-id').focus();

    await page.waitForTimeout(5000);

}
);

test('Set Input Files', async ({ page }) => {

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');

    await page.locator('[type="file"]').setInputFiles('C:\\Users\\DELL\\Desktop\\NewTextDocument.txt');

    await page.locator('[value="Press"]').click();

    await page.locator('//*[contains(text(),"Google ")]').isVisible();

    await page.waitForTimeout(5000);

}
);


test('Select Option', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.locator('[name="my-select"]').selectOption('Two');

    await page.waitForTimeout(5000);

}
);


test.only('Select Option Datalist', async ({ page }) => {

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

    await page.locator('[name="my-datalist"]').fill('New York');

    await page.locator('[name="my-datalist"]').press('Tab');

    await page.waitForTimeout(5000);

}
);





