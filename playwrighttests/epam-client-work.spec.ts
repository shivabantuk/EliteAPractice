import { test, expect } from '@playwright/test';

test('Navigate to EPAM and verify Client Work', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForLoadState('domcontentloaded');

  // Step 2: Select "Services" from the header menu.
  const servicesMenu = page.locator('header >> text=Services');
  await servicesMenu.click();
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the menu is loaded

  // Step 3: Click the "Explore Our Client Work" link.
  const exploreClientWorkLink = page.locator('text=Explore Our Client Work');
  await exploreClientWorkLink.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 4: Verify that the "Client Work" text is visible on the page.
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