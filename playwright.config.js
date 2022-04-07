// @ts-check
const { devices, expect } = require('@playwright/test')
const { matchers } = require('expect-playwright')

expect.extend(matchers)
global.expect = expect

const BASE_URL = process.env.BASE_URL || 'https://dev.app.bossabox.com'
global.BASE_URL = BASE_URL

const BASE_URL_API = process.env.BASE_URL_API || 'https://drj335kkci.execute-api.sa-east-1.amazonaws.com'
global.BASE_URL_API = BASE_URL_API

const CI = process.env.CI || false
global.CI = CI

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    baseURL: BASE_URL,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'on-first-retry',
    ignoreHTTPSErrors: true,
    colorScheme: 'dark',
    extraHTTPHeaders: {
      playwrightTest: '1'
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ],
  reporter: CI
    ? 'github'
    : [
        ['json', { outputFile: 'reports/json/results.json' }],
        ['html', { outputFolder: 'reports/html' }],
        ['list']
      ],
  workers: CI ? 8 : undefined,
  globalTimeout: 60 * 1000,
  outputDir: './reports',
  forbidOnly: !!CI
}

module.exports = config
