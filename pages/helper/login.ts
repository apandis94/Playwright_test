import { chromium, Browser, Page } from '@playwright/test';

export async function openBrowser(
  url: string
): Promise<{ browser: Browser; page: Page }> {
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--start-maximized'
    ],
  });

  const context = await browser.newContext({
    viewport: null,
  });

  const page = await context.newPage();

  // console.log('Viewport:', page.viewportSize());

  await page.goto(url);

  return { browser, page };
}

export async function closeBrowser(browser?: Browser) {
  if (browser) await browser.close();
}
