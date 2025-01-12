class InventoryPage {
  constructor(page) {
    this.page = page;
    this.itemElements = this.page.locator('.inventory_item');
    this.cartLink = this.page.locator('.shopping_cart_link');
  }

  async selectRandomItems(itemCount) {
    const totalItems = await this.itemElements.count();
    const selectedItems = new Set();

    while (selectedItems.size < itemCount) {
      const randomIndex = Math.floor(Math.random() * totalItems);
      if (!selectedItems.has(randomIndex)) {
        selectedItems.add(randomIndex);
        const itemButton = this.itemElements.nth(randomIndex).locator('button');
        await itemButton.click();
      }
    }
  }

  async addItemByName(name) {
    const itemButton = this.page.locator(`.inventory_item:has-text("${name}") button`);
    await itemButton.click();
  }

  async removeItemByName(name) {
    const itemButton = this.page.locator(`.inventory_item:has-text("${name}") button`);
    await itemButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = { InventoryPage };
