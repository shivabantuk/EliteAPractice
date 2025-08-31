import { test, expect } from '@playwright/test';

test('Navigate to EPAM and verify Client Work', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForLoadState('domcontentloaded');

  // Step 2: Select "Services" from the header menu.
  const servicesMenu = page.locator('a[href="/services"]');
  await servicesMenu.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 3: Click the "Explore Our Client Work" link.
  const exploreClientWorkLink = page.locator('a[href="/our-work"]');
  await exploreClientWorkLink.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 4: Verify that the "Client Work" text is visible on the page.
  const clientWorkText = page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});
