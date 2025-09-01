package playwrighttests;

import com.microsoft.playwright.*;

public class EpamTest {
  public static void main(String[] args) {
    try (Playwright playwright = Playwright.create()) {
      Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
      BrowserContext context = browser.newContext();
      Page page = context.newPage();

      // Step 1: Navigate to https://www.epam.com/
      page.navigate("https://www.epam.com/");
      page.waitForLoadState();

      // Step 2: Select "Services" from the header menu.
      page.click("text=Services");
      page.waitForLoadState();

      // Step 3: Click the "Explore Our Client Work" link.
      page.click("text=Explore Our Client Work");
      page.waitForLoadState();

      // Step 4: Verify that the "Client Work" text is visible on the page.
      boolean isClientWorkVisible = page.isVisible("text=Client Work");
      if (isClientWorkVisible) {
        System.out.println("Test Passed: 'Client Work' text is visible on the page.");
      } else {
        System.out.println("Test Failed: 'Client Work' text is not visible on the page.");
      }

      browser.close();
    }
  }
}
