class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginBtn = 'button[id="submit"]';
    this.successMessage = '.post-title';
    this.errorMessage = '#error';
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginBtn);
  }

  async getSuccessMessage() {
    return await this.page.locator(this.successMessage).innerText();
  }

  async getErrorMessage() {
    return await this.page.locator(this.errorMessage).innerText();
  }
}

module.exports = { LoginPage };