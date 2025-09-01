import { test, expect } from '@playwright/test';

test('Navigate to Epam and verify Client Work text', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Step 2: Select "Services" from the header menu
  const servicesMenu = await page.$('text=Services');
  await servicesMenu?.click();
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Step 3: Click the "Explore Our Client Work" link
  const exploreClientWorkLink = await page.$('text=Explore Our Client Work');
  await exploreClientWorkLink?.click();
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.$('text=Client Work');
  expect(clientWorkText).not.toBeNull();
});