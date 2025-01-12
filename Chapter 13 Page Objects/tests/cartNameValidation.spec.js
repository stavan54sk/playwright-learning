const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { InventoryPage } = require('../pageObjects/InventoryPage');
const { CartPage } = require('../pageObjects/CartPage');

test.describe('Add and Remove Items by Name in Cart', () => {
  let loginPage, inventoryPage, cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    // Navigate to the site and login
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should add and remove items by name from the cart', async ({ page }) => {
    // Define item names to test with
    const itemNamesToAdd = ["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt"];
    const itemToRemove = "Sauce Labs Bike Light";

    // Add items by name
    for (const itemName of itemNamesToAdd) {
      await inventoryPage.addItemByName(itemName);
    }

    // Go to cart and verify items were added
    await inventoryPage.goToCart();
    let cartItemNames = await cartPage.getCartItemNames();
    expect(cartItemNames).toEqual(itemNamesToAdd);

    // Remove one item by name
    await page.goBack(); // Go back to Inventory Page to remove an item
    await inventoryPage.removeItemByName(itemToRemove);
    await inventoryPage.goToCart();

    // Verify remaining items in cart
    const expectedRemainingItems = itemNamesToAdd.filter(name => name !== itemToRemove);
    cartItemNames = await cartPage.getCartItemNames();
    expect(cartItemNames).toEqual(expectedRemainingItems);
  });
});