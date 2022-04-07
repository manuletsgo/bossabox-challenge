const { HeaderSection } = require('../sections/header')

class HomePage {
  constructor(page) {
    this.page = page

    this.header = new HeaderSection(page)
  }

  async load() {
    await this.page.waitForNavigation({
      url: `${CONFIG_ENV.baseUrl}/pt`
    })
  }
}

module.exports = { HomePage }
