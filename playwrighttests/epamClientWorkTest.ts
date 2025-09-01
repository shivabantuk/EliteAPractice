import { test, expect } from '@playwright/test';

test('Navigate to Epam and verify Client Work text', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  
  // Step 2: Select "Services" from the header menu
  await page.waitForSelector('header'); // Wait for the header to be visible
  await page.click('text=Services');
  
  // Step 3: Click the "Explore Our Client Work" link
  await page.waitForSelector('text=Explore Our Client Work'); // Wait for the link to be visible
  await page.click('text=Explore Our Client Work');
  
  // Step 4: Verify that the "Client Work" text is visible on the page
  await page.waitForSelector('text=Client Work'); // Wait for the text to be visible
  const clientWorkText = await page.isVisible('text=Client Work');
  expect(clientWorkText).toBe(true);
});