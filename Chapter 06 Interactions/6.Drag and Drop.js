import { test, expect, Page } from '@playwright/test';


test(' dragTo ', async ({ page }) => {

    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html");
  
    await page.locator('Draggable panel Drag me').dragTo(page.locator("#target"));
  
    await page.waitForTimeout(5000)
  
  });
  
  // test(' draggingManually ', async ({ page }) => {
  
  //   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html");
  
  
  //   await page.getByText('Draggable panel Drag me').hover();
  
  //   await page.mouse.down();
  
  //   await page.locator("#target").hover();
  
  //   await page.mouse.up();
  
  //   await page.waitForTimeout(5000)
  
  // });


// const sourceLocator = page.locator('div#source'); // Source element
// const targetLocator = page.locator('div#target'); // Target drop zone

// // Click on the source to initiate the drag
// await sourceLocator.click(); // Click on the source to focus

// // Simulate holding down a keyboard key (e.g., Ctrl) while dragging
// await page.keyboard.down('Control'); // Hold down Ctrl (or any other modifier key)

// // Use the dragTo method for dragging while the key is held down
// await sourceLocator.dragTo(targetLocator); // Drag using `dragTo()`

// // Release the keyboard key after dropping
// await page.keyboard.up('Control'); // Release the Ctrl key
  
  