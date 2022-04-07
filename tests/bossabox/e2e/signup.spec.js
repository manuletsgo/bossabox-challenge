const { test } = require('@playwright/test')

const data = require('../../../src/config/data')

const { accessSignup } = require('../../../src/utils')

const { SignupPage } = require('../../../src/pages/singup')

test.describe('@bossabox @e2e singup tests', () => {
  test('@signup_success should be able to signup', async ({ page }) => {
    await accessSignup(page)

    const signupPage = new SignupPage(page)
    await signupPage.validateUrlStepOne()
    await signupPage.signupStepOne(data.auth.register)

    await signupPage.validateUrlStepTwo()
    await signupPage.validateHelloUserName(`Olá, ${data.auth.register.firstName}`)
  })

  test('@signup_error @signup_different_passwords should not be able to signup with different passwords', async ({ page }) => {
    await accessSignup(page)

    const signupPage = new SignupPage(page)
    await signupPage.validateUrlStepOne()
    await signupPage.signupStepOne(data.auth.register_error.different_passwords)

    await signupPage.validateFormError(data.auth.register_error.different_passwords.message)
  })

  test('@signup_error @signup_short_password should not be able to signup with short password', async ({ page }) => {
    await accessSignup(page)

    const signupPage = new SignupPage(page)
    await signupPage.validateUrlStepOne()
    await signupPage.signupStepOne(data.auth.register_error.short_password)

    await signupPage.validateFormError(data.auth.register_error.short_password.message)
  })

  test('@signup_error @signup_empty_field should not be able to signup with empty field', async ({ page }) => {
    await accessSignup(page)

    const signupPage = new SignupPage(page)
    await signupPage.validateUrlStepOne()
    await signupPage.signupStepOne(data.auth.register_error.empty_field)

    await signupPage.validateFormError(data.auth.register_error.empty_field.message)
  })

  test('@signup_error @signup_invalid_email should not be able to signup with invalid email', async ({ page }) => {
    await accessSignup(page)

    const signupPage = new SignupPage(page)
    await signupPage.validateUrlStepOne()
    await signupPage.signupStepOne(data.auth.register_error.invalid_email)

    await signupPage.validateFormError(data.auth.register_error.invalid_email.message)
  })

  test('@signup_error @signup_email_already_registered should not be able to signup with email that already registered', async ({ page }) => {
    await accessSignup(page)

    const signupPage = new SignupPage(page)
    await signupPage.validateUrlStepOne()
    await signupPage.signupStepOne(data.auth.register_error.email_already_registered)

    await signupPage.validateFormError(data.auth.register_error.email_already_registered.message)
  })
})
