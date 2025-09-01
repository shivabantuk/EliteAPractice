import { test, expect } from '@playwright/test';

test('Navigate to EPAM and verify Client Work', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Step 2: Select "Services" from the header menu
  await page.hover('text=Services');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Step 3: Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.isVisible('text=Client Work');
  expect(clientWorkText).toBeTruthy();
});