import { chromium } from 'playwright';

(async () => {
  // Step 1: Launch the browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Step 2: Navigate to the URL
  await page.goto('https://www.epam.com/');
  await page.waitForTimeout(3000); // Wait for 3 seconds

  // Step 3: Click on "Services" from the header menu
  await page.click('text=Services');
  await page.waitForTimeout(3000); // Wait for 3 seconds

  // Step 4: Click on "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  await page.waitForTimeout(3000); // Wait for 3 seconds

  // Step 5: Verify the "Client Work" text is visible
  const isVisible = await page.isVisible('text=Client Work');
  console.log(`Client Work text is visible: ${isVisible}`);

  // Close the browser
  await browser.close();
})();
