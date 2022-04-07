class SignupPage {
  constructor(page) {
    this.page = page

    this.inputFullName = page.locator('#input-fullName')
    this.inputEmail = page.locator('#input-email')
    this.inputPassword = page.locator('#input-password')
    this.inputConfirmPassword = page.locator('#input-confirmPassword')
    this.buttonRegister = page.locator('.bg-blue-base.bbox-button:nth-of-type(1)')
    this.buttonRegisterGoogle = page.locator('.google-button')
    this.buttonSignIn = page.locator('.link')
    this.pErrorMessage = page.locator('.card p')

    this.h2HelloName = page.locator('h2')
  }

  async goto() {
    await this.page.goto('/signup')
  }

  async validateUrlStepOne() {
    expect(this.page).toHaveURL('/signup')
  }

  async signupStepOne(data) {
    await this.inputFullName.fill(data.name)
    await this.inputEmail.fill(data.email)
    await this.inputPassword.fill(data.password)
    await this.inputConfirmPassword.fill(data.confirmPassword)
    await this.buttonRegister.click()
  }

  async validateFormError(errorMessage) {
    await expect(this.pErrorMessage).toMatchText(errorMessage)
  }

  async validateUrlStepTwo() {
    expect(this.page).toHaveURL('/profile/finish-registration')
  }

  async validateHelloUserName(helloName) {
    await expect(this.h2HelloName).toMatchText(helloName)
  }
}

module.exports = { SignupPage }
