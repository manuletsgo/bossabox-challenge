class LoginPage {
  constructor(page) {
    this.page = page

    this.buttonRegister = page.locator('.bbox-button:first-child')

    this.inputEmail = page.locator('#input-email')
    this.inputPassword = page.locator('#input-password')
    this.buttonLogin = page.locator('.bbox-button:nth-of-type(2)')
  }

  async goto() {
    await this.page.goto('/login')
  }

  async accessRegister() {
    await this.buttonRegister.click()
  }

  async login({ email, password }) {
    await this.inputEmail.fill(email)
    await this.inputPassword.fill(password)
    await this.buttonLogin.click()
  }

  async validateError(errorMessage) {
    await expect(this.pErrorInvalidLogin).toHaveText(errorMessage)
  }
}

module.exports = { LoginPage }
