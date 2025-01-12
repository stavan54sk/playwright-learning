const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { InventoryPage } = require('../pageObjects/InventoryPage');
const { CartPage } = require('../pageObjects/CartPage');
const { CheckoutPage } = require('../pageObjects/CheckoutPage');

test.describe('Sauce Labs Checkout Flow', () => {
  let loginPage, inventoryPage, cartPage, checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    // Navigate to the site and login
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should complete checkout flow with 3 random items', async ({ page }) => {
    // Select 3 random items
    await inventoryPage.selectRandomItems(3);
    await inventoryPage.goToCart();

    // Proceed to checkout
    await cartPage.proceedToCheckout();

    // Fill customer info and complete the order
    await checkoutPage.fillCustomerInfo('John', 'Doe', '12345');
    await checkoutPage.completeOrder();

    // Verify order completion
    const confirmationMessage = await checkoutPage.getConfirmationMessage();
    const confirmationTextMessage = await checkoutPage.getConfirmationTextMessage();
    const buttonText = await checkoutPage.getButtonText();
    expect(confirmationMessage).toContain('Thank you for your order');
    expect(confirmationTextMessage).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    expect(buttonText).toContain('Back Home');
  });
});
