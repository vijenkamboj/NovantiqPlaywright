class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutBtn = '.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color';
  }

  async logout() {
    await this.page.click(this.logoutBtn);
  }

  async isLoggedOut() {
    return await this.page.url() === 'https://practicetestautomation.com/practice-test-login/';
  }
}

module.exports = { LogoutPage };