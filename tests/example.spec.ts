import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://projectneo.adobe.com/');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Log In' }).click()
  await page.waitForTimeout(5000);
  // await page.getByLabel('Email address').fill('azademyofficial@gmail.com')
  // await page.getByRole('button', { name: 'Continue', exact: true }).click()
  // await page.waitForTimeout(5000);
  // await page.getByRole('button', { name: 'Continue' }).click()
  // await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Continue with Google' }).click()
  await page.waitForTimeout(5000); 
  await page.getByLabel('Email or phone').fill('azademyofficial@gmail.com')
  await page.getByRole('button', { name: 'Next' }).click()
  await page.waitForTimeout(5000);
  
});