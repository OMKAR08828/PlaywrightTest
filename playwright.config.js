// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { config } from 'process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30*1000,
  snapshotDir: "Downloads",
  expect:{
    timeout: 5000
  }, 
  use: {
 browserName : 'chromium',
 headless: true
  } ,
  reporter: ('html')
});
