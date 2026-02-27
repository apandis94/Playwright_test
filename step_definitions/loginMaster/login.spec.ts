import { Given, When, setDefaultTimeout } from '@cucumber/cucumber';
import { setPage, setBrowser, page, browser, loginStep } from '../hooks';
import { openBrowser, closeBrowser } from '../../pages/helper/login';
import { LoginStep } from '../../pages/step/login/loginStep';
import path from 'path';
import * as fs from 'fs';

setDefaultTimeout(60 * 1000);

Given('Open browser fms web', async () => {
  const { browser: openedBrowser, page: openedPage } =
    await openBrowser(process.env.BASE_URL!);

  setBrowser(openedBrowser);
  setPage(openedPage);
  await openedPage.waitForTimeout(2000);
});

When('Open browser fms trac rental', async () => {
  const { browser: openedBrowser, page: openedPage } =
    await openBrowser(process.env.BASE_URL2!);

  setBrowser(openedBrowser);
  setPage(openedPage);
  await openedPage.waitForTimeout(2000);
});

When('I login to FMS', async () => {
  if (!page) throw new Error('Page is not initialized');

  const loginStep = new LoginStep(page, process.env.BASE_URL!);
  await loginStep.loginwebfms();
});

When('I login to TRAC B2C Insdustries', async () => {
  if (!page) throw new Error('Page is not initialized');

  const loginStep = new LoginStep(page, process.env.BASE_URL2!);
  await loginStep.loginTracWeb();
});

When ('Set to dashboard trac web', async () => {
  if (!browser) {
    const { browser: newBrowser, page: newPage } = await openBrowser(process.env.BASE_URL2!);
    setBrowser(newBrowser);
    setPage(newPage);
  }
  const statePath = path.join(__dirname, '../../pages/step/login/tracLogin/loginState.json');
  if (!fs.existsSync(statePath)) {
    throw new Error(`File ${statePath} jika tidak ditemukan kawan`);
  }

  const oldPage = page;
  const context = await browser!.newContext({ 
    storageState: statePath,
    viewport: null
  });
  const newPage = await context.newPage();

  if (oldPage && !oldPage.isClosed()) {
    await oldPage.close();
  }
  await newPage.goto(process.env.BASE_URL2!);
  setPage(newPage);
});

When('I close browser', async () => {
  if (!browser) return;
  await closeBrowser(browser);
});
