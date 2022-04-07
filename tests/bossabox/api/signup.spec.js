const { test } = require('@playwright/test')

const data = require('../../../src/config/data')

test.describe('@bossabox @api singup api tests', () => {
  test('should be able to signup by api', async ({ request }) => {
    const payload = {
      fullName: data.auth.register.name,
      password: data.auth.register.password,
      email: data.auth.register.email,
      loginType: data.auth.register.loginType
    }

    const response = await request.post(`${BASE_URL_API}/dev/v1/users`, {
      data: payload
    })

    expect(response).toBeOK()

    const responseBody = await response.json()
    expect(responseBody.user.fullName).toEqual(payload.fullName)
    expect(responseBody.user.email).toEqual(payload.email)
    expect(responseBody.user.loginType).toEqual([payload.loginType])
  })

  test('should not be able to signup by api with invalid email', async ({ request }) => {
    const payload = {
      fullName: data.auth.register_error.invalid_email.name,
      password: data.auth.register_error.invalid_email.password,
      email: data.auth.register_error.invalid_email.email,
      loginType: data.auth.register_error.invalid_email.loginType
    }

    const response = await request.post(`${BASE_URL_API}/dev/v1/users`, {
      data: payload
    })

    expect(response).not.toBeOK()

    const responseBody = await response.json()
    expect(responseBody.error.status).toEqual(400)
    expect(responseBody.error.code).toEqual('INVALID_EMAIL')
    expect(responseBody.error.message).toEqual('O e-mail é inválido')
    expect(responseBody.error.type).toEqual('ApiError')
  })

  test('should not be able to signup by api with empty name', async ({ request }) => {
    const payload = {
      password: data.auth.register.password,
      email: data.auth.register.email,
      loginType: data.auth.register.loginType
    }

    const response = await request.post(`${BASE_URL_API}/dev/v1/users`, {
      data: payload
    })

    expect(response).not.toBeOK()

    const responseBody = await response.json()
    expect(responseBody.error.status).toEqual(400)
    expect(responseBody.error.code).toEqual('FULLNAME_REQUIRED')
    expect(responseBody.error.message).toEqual('"fullName" é obrigatório')
    expect(responseBody.error.type).toEqual('ApiError')
  })

  test('should not be able to signup by api with empty password', async ({ request }) => {
    const payload = {
      fullName: data.auth.register.name,
      email: data.auth.register.email,
      loginType: data.auth.register.loginType
    }

    const response = await request.post(`${BASE_URL_API}/dev/v1/users`, {
      data: payload
    })

    expect(response).not.toBeOK()

    const responseBody = await response.json()
    expect(responseBody.error.status).toEqual(400)
    expect(responseBody.error.code).toEqual('PASSWORD_REQUIRED')
    expect(responseBody.error.message).toEqual('"password" é obrigatório')
    expect(responseBody.error.type).toEqual('ApiError')
  })

  test('should not be able to signup by api with empty loginType', async ({ request }) => {
    const payload = {
      fullName: data.auth.register.name,
      password: data.auth.register.password,
      email: data.auth.register.email
    }

    const response = await request.post(`${BASE_URL_API}/dev/v1/users`, {
      data: payload
    })

    expect(response).not.toBeOK()

    const responseBody = await response.json()
    expect(responseBody.error.status).toEqual(400)
    expect(responseBody.error.code).toEqual('LOGINTYPE_REQUIRED')
    expect(responseBody.error.message).toEqual('"loginType" é obrigatório')
    expect(responseBody.error.type).toEqual('ApiError')
  })
})
