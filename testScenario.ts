import { chromium, Browser, Page } from 'playwright';

async function runTest() {
  // Launch browser
  const browser: Browser = await chromium.launch();
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
    console.log('Client Work text is visible on the page.');
  } else {
    console.log('Client Work text is NOT visible on the page.');
  }

  // Take a screenshot
  await page.screenshot({ path: 'client_work.png' });

  // Close browser
  await browser.close();
}

runTest();