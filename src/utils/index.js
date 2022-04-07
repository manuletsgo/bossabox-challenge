const { LoginPage } = require('../../src/pages/login')

async function accessSignup(page) {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.accessRegister()
}

module.exports = { accessSignup }
