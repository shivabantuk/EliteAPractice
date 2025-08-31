import { chromium, Browser, Page } from 'playwright';
import test from 'playwright/test';

test('epam ', async function runTest() {
  let browser: Browser | undefined;
  try {
    browser = await chromium.launch();
    const page: Page = await browser.newPage();

    // Navigate to https://www.epam.com/
    await page.goto('https://www.epam.com/');

    // Wait for "Services" menu and click
    await page.waitForSelector('text=Services', { state: 'visible', timeout: 10000 });
    await page.click('text=Services');

    // Wait for "Explore Our Client Work" link and click
    await page.waitForSelector('text=Explore Our Client Work', { state: 'visible', timeout: 10000 });
    await page.click('text=Explore Our Client Work');

    // Wait for "Client Work" text to be visible
    const clientWorkVisible = await page.isVisible('text=Client Work');
    if (clientWorkVisible) {
      console.log('Test Passed: "Client Work" text is visible on the page.');
    } else {
      console.log('Test Failed: "Client Work" text is not visible on the page.');
    }
  } catch (error) {
    console.error('Test Failed:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

);