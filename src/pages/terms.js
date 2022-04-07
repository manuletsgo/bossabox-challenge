class TermsPage {
  constructor(page) {
    this.page = page

    this.frameTerms = page.frameLocator('iframe')
    this.buttonCancelTerms = this.frameTerms.locator('.terms-buttons .cancel')
    this.buttonAcceptTerms = this.frameTerms.locator('.terms-buttons .accept')
  }

  async load() {
    await this.page.waitForNavigation({
      url: `${CONFIG_ENV.baseUrl}/pt/terms`
    })
  }

  async cancelTerms() {
    await this.buttonCancelTerms.click()
  }

  async acceptTerms() {
    await this.buttonAcceptTerms.click()
  }
}

module.exports = { TermsPage }
