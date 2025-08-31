import { chromium, Browser, Page } from 'playwright';

async function runTest() {
  // Launch browser
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  // Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Select "Services" from the header menu
  await page.click('text=Services');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.isVisible('text=Client Work');
  if (clientWorkText) {
    console.log('Test Passed: "Client Work" text is visible on the page.');
  } else {
    console.log('Test Failed: "Client Work" text is not visible on the page.');
  }

  // Close browser
  await browser.close();
}

runTest();