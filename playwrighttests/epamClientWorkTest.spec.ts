import { test, expect } from '@playwright/test';

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