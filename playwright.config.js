// @ts-check
const { defineConfig, devices } = require('@playwright/test');
import dotenv from 'dotenv';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

dotenv.config({
  path: `.env.${process.env.ENV}`
});

/**
 * @see https://playwright.dev/docs/test-configuration
 * 
 */
module.exports = defineConfig({

  projects: [
    {
      name: 'chromium',
        // Give failing tests 3 retry attempts
      use: { ...devices['Desktop Chrome'] },

      // fullyParallel: true, // Enable parallel execution for all tests
      // workers: process.env.CI ? 3 : undefined // Adjust workers in CI environment
    }
  ],
  testDir: './Chapter 13 Page Objects & Reporting',

  timeout: 30 * 1000,

  expect:{
    timeout:5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName:'chromium',
    // screenshot:'on',
    video:'on',


    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
 
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },


  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

