import { test, expect } from '@playwright/test';

test.describe('EPAM Website Navigation', () => {
  test('Navigate to Client Work from Services', async ({ page }) => {
    // Step 1: Navigate to https://www.epam.com/
    await page.goto('https://www.epam.com/');

    // Step 2: Select "Services" from the header menu
    const servicesMenu = page.locator('header >> text=Services');
    await servicesMenu.click();

    // Step 3: Click the "Explore Our Client Work" link
    const exploreClientWorkLink = page.locator('text=Explore Our Client Work');
    await exploreClientWorkLink.click();

    // Step 4: Verify that the "Client Work" text is visible on the page
    const clientWorkText = page.locator('text=Client Work');
    await expect(clientWorkText).toBeVisible();
  });

  // Edge Case: Verify navigation to Services page
  test('Verify Services page navigation', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    const servicesMenu = page.locator('header >> text=Services');
    await servicesMenu.click();
    await expect(page).toHaveURL(/.*services/);
  });

  // Negative Case: Verify handling of missing "Explore Our Client Work" link
  test('Handle missing "Explore Our Client Work" link', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    const servicesMenu = page.locator('header >> text=Services');
    await servicesMenu.click();
    const exploreClientWorkLink = page.locator('text=Explore Our Client Work');
    await expect(exploreClientWorkLink).toHaveCount(1);
  });
});