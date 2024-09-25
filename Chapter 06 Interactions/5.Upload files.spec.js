import { test, expect, Page } from '@playwright/test';

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



// Upload multiple files through the file chooser
// await fileChooser.setFiles(['path/to/file1.txt', 'path/to/file2.png']);


// You can clear previously uploaded files by passing null to the setInputFiles() method
// const fileInputLocator = page.locator('input[type="file"]');
// await fileInputLocator.setInputFiles(null);


// const fileInputLocator = page.locator('input[type="file"]');
// await fileInputLocator.evaluate(input => {
//     const file = new File(['file content'], 'example.txt', { type: 'text/plain' });
//     const dataTransfer = new DataTransfer();
//     dataTransfer.items.add(file);
//     input.files = dataTransfer.files;
//     input.dispatchEvent(new Event('change'));
// });


// Focus element
// For the dynamic pages that handle focus events, you can focus the given element with locator.focus().
// await page.getByLabel('Password').focus();