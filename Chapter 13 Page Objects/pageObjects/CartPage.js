class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItems = this.page.locator('.cart_item');
      this.cartItemNames = this.page.locator('.cart_item_label .inventory_item_name');
      this.checkoutButton = this.page.locator('#checkout');
    }

    async getCartItemNames() {
      return await this.cartItemNames.allTextContents();
    }
  
    async proceedToCheckout() {
      await this.checkoutButton.click();
    }
  }
  
  module.exports = { CartPage };