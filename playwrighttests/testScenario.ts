import { chromium, Browser, Page } from 'playwright';

async function runTest() {
  // Launch the browser
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();

  // Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForTimeout(3000); // Wait for 3 seconds

  // Select "Services" from the header menu
  await page.click('text=Services');
  await page.waitForTimeout(3000); // Wait for 3 seconds

  // Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  await page.waitForTimeout(3000); // Wait for 3 seconds

  // Verify that the "Client Work" text is visible on the page
  const isVisible = await page.isVisible('text=Client Work');
  console.assert(isVisible, 'Client Work text is not visible on the page');

  // Close the browser
  await browser.close();
}

runTest().catch((error) => {
  console.error(error);
});
