import { chromium, Browser, Page } from 'playwright';

async function runTest() {
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();

  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForTimeout(2000); // Adding wait to ensure page is loaded

  // Step 2: Select "Services" from the header menu
  await page.click('text=Services');
  await page.waitForTimeout(2000); // Adding wait to ensure menu is loaded

  // Step 3: Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  await page.waitForTimeout(2000); // Adding wait to ensure page is loaded

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.isVisible('text=Client Work');
  if (clientWorkText) {
    console.log('Test Passed: "Client Work" text is visible on the page.');
  } else {
    console.log('Test Failed: "Client Work" text is not visible on the page.');
  }

  await browser.close();
}

runTest();