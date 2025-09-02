import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
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
  const clientWorkVisible = await page.isVisible('text=Client Work');
  console.assert(clientWorkVisible, 'Client Work text is not visible');

  await browser.close();
})();