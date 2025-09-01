
import { chromium, Browser, Page } from 'playwright';

async function runTest() {
  // Launch the browser
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();

  // Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForLoadState('networkidle');

  // Select "Services" from the header menu
  await page.click('text=Services');
  await page.waitForLoadState('networkidle');

  // Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  await page.waitForLoadState('networkidle');

  // Verify that the "Client Work" text is visible on the page
  const clientWorkVisible = await page.isVisible('text=Client Work');
  if (clientWorkVisible) {
    console.log('Test Passed: "Client Work" text is visible on the page.');
  } else {
    console.log('Test Failed: "Client Work" text is not visible on the page.');
  }

  // Close the browser
  await browser.close();
}

runTest().catch((error) => {
  console.error('Error:', error);
});
