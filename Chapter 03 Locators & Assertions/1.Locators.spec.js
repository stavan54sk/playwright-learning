const { test, expect } = require('@playwright/test');

test('getByRole', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await page.getByRole('button', { name: 'Submit' }).click();
    
});

test('getByText', async ({ page }) => {

    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");
 
    await page.getByText('Default checkbox').click();
     
 });

 test('getByLabel', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await page.getByLabel('Text input').fill('MyLabel')
    
});

test('getByPlaceholder', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await page.getByPlaceholder('Type to search...').fill('MyPlaceholder')
    
});

test('getByAltText', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/loading-images.html");

   await page.waitForTimeout(5000)

   await page.getByAltText('compass').hover();  
   
    
});

test('getByTitle', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   await page.getByTitle('Hands-On Selenium WebDriver with Java').isVisible(); 
    
});


// test('getByTestId', async ({ page }) => {

//    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

//    await page.getByTestId('Hands-On Selenium WebDriver with Java').isVisible(); 
    
// });

test('css', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await page.locator('[name="my-date"]').click() 
    
});

test('xpath', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   await page.locator('//*[text()="Web form"]').click();
    
});

test('filter by has text', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   await page.getByRole('link').filter({ hasText: 'Web form' }).click();
    
});

test('filter by has not text', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   await expect(page.getByRole('link').filter({ hasNotText: 'Out of stock' })).toHaveCount(31);
    
});

test('matching inside a locator', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   const div = page.getByText('Chapter 3. WebDriver Fundamentals Web form Navigation Dropdown menu Mouse over');

   await div.getByRole('link').filter({hasText:'Web form'}).click();
    
});

test('matching 2 locator simultaneously', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   const div = page.getByText('Chapter 3. WebDriver Fundamentals Web form Navigation Dropdown menu Mouse over');

   await div.getByRole('link').filter({hasText:'Web form'}).click();
    
});

test('matching 2 locator alternatively', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   const div = page.getByText('Chapter 3. WebDriver Fundamentals Web form Navigation Dropdown menu Mouse over');

   await div.getByRole('link').filter({hasText:'Web form'}).click();
    
});

test('matching only visible', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   const div = page.getByText('Chapter 3. WebDriver Fundamentals Web form Navigation Dropdown menu Mouse over');

   await div.getByRole('link').filter({hasText:'Web form'}).click();
    
});

test('count items in a list', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   const div = page.getByText('Chapter 3. WebDriver Fundamentals Web form Navigation Dropdown menu Mouse over');

   await div.getByRole('link').filter({hasText:'Web form'}).click();
    
});

test('get by nth item', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   const div = page.getByText('Chapter 3. WebDriver Fundamentals Web form Navigation Dropdown menu Mouse over');

   await div.getByRole('link').filter({hasText:'Web form'}).click();
    
});

test('chaining filters', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   const div = page.getByText('Chapter 3. WebDriver Fundamentals Web form Navigation Dropdown menu Mouse over');

   await div.getByRole('link').filter({hasText:'Web form'}).click();
    
});





