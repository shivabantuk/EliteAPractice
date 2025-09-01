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

test('EPAM Client Work Test', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Wait for "Services" to be visible before clicking
  await page.waitForSelector('text=Services', { state: 'visible', timeout: 10000 });
  await page.click('text=Services');

  // Wait for "Explore Our Client Work" to be visible before clicking
  await page.waitForSelector('text=Explore Our Client Work', { state: 'visible', timeout: 10000 });
  await page.click('text=Explore Our Client Work');

  // Verify "Client Work" text is visible
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});