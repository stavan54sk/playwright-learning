class CheckoutPage {
    constructor(page) {
      this.page = page;
    }
  
    async fillCustomerInfo(firstName, lastName, zipCode) {
      await this.page.fill('#first-name', firstName);
      await this.page.fill('#last-name', lastName);
      await this.page.fill('#postal-code', zipCode);
      await this.page.click('#continue');
    }
  
    async completeOrder() {
      await this.page.click('#finish');
    }
  
    async getConfirmationMessage() {
      return this.page.textContent('.complete-header');
    }

    async getConfirmationTextMessage() {
      return this.page.textContent('.complete-text');
    }

    async getButtonText() {
      return this.page.textContent('#back-to-products');
    }
  }
  
  module.exports = { CheckoutPage };