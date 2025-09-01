import { test, expect } from '@playwright/test';

test('Verify Client Work text is visible', async ({ page }) => {
  // Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Select "Services" from the header menu
  const servicesMenu = page.locator('text=Services');
  await servicesMenu.click();
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Click the "Explore Our Client Work" link
  const clientWorkLink = page.locator('text=Explore Our Client Work');
  await clientWorkLink.click();
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Verify that the "Client Work" text is visible on the page
  const clientWorkText = page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});