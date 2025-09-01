import { test, expect } from '@playwright/test';

test('Navigate to EPAM and verify Client Work', async ({ page }) => {
  // Navigate to the EPAM website
  await page.goto('https://www.epam.com/');
  
  // Wait for the page to load
  await page.waitForLoadState('load');
  
  // Select "Services" from the header menu
  const servicesMenu = page.locator('header >> text=Services');
  await servicesMenu.click();
  
  // Wait for the Services page to load
  await page.waitForLoadState('load');
  
  // Click the "Explore Our Client Work" link
  const clientWorkLink = page.locator('text=Explore Our Client Work');
  await clientWorkLink.click();
  
  // Wait for the Client Work page to load
  await page.waitForLoadState('load');
  
  // Verify that the "Client Work" text is visible on the page
  const clientWorkText = page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});

test('EPAM Client Work Test', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  // Wait for the "Services" menu to be visible before clicking
await page.waitForSelector('text=Services', { state: 'visible' });

  // Step 2: Select "Services" from the header menu.
  await page.click('text=Services');

  // Step 3: Click the "Explore Our Client Work" link.
  await page.click('text=Explore Our Client Work');

  // Step 4: Verify that the "Client Work" text is visible on the page.
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});