import { test, expect } from '@playwright/test';

test.describe('EPAM Website Tests', () => {
  test('Navigate to Services and Explore Client Work', async ({ page }) => {
    // Navigate to the EPAM website
    await page.goto('https://www.epam.com/');

    // Select "Services" from the header menu
    await page.click('text=Services');

    // Click the "Explore Our Client Work" link
    await page.click('text=Explore Our Client Work');

    // Verify that the "Client Work" text is visible on the page
    const clientWorkText = await page.locator('text=Client Work');
    await expect(clientWorkText).toBeVisible();
  });
});