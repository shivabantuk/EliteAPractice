import { chromium, Browser, Page } from 'playwright';

async function runTest() {
  // Launch the browser
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();

  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Step 2: Select "Services" from the header menu
  await page.click('text=Services');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Step 3: Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkVisible = await page.isVisible('text=Client Work');
  if (clientWorkVisible) {
    console.log('Client Work text is visible on the page.');
  } else {
    console.log('Client Work text is NOT visible on the page.');
  }

  // Close the browser
  await browser.close();
}

runTest();
