import { Page } from '@playwright/test';
import { vehicleLocator } from '../locator/vehicle/vehicleLocator';
import { testContext } from './utils/textContext';

export class searchingData {
  private page: Page;
  private vehicleLocator: vehicleLocator;

  constructor(page: Page) {
    this.page = page;
    this.vehicleLocator = new vehicleLocator(page);
  }

  async searchingdatacreatefms(maxRetry = 10) {
      for (let attempt = 1; attempt <= maxRetry; attempt++) {
        console.log(`Verify vehicle attempt ${attempt}/${maxRetry}`);
        console.log(testContext.buGlobal);
        console.log(testContext.dataGLobal);
  
        await this.page.reload();
        await this.page.waitForLoadState('networkidle');
  
        await this.vehicleLocator.frontbusinessunit.fill(testContext.buGlobal);
        await this.page.waitForTimeout(3000);
        await this.page
          .locator(
            `xpath=//div[@class="ant-select-item-option-content"][contains(.,'${testContext.buGlobal}')]`
          )
          .click();
  
        await this.vehicleLocator.searchinglicensplate.fill(testContext.dataGLobal);
        // await this.vehicleLocator.buttonsearchvehicle.click();
        await this.page.keyboard.press('Enter');
  
        const isFound = await this.vehicleLocator.tablelistvehicle
          .filter({ hasText: testContext.dataGLobal })
          .isVisible();
  
        if (isFound) {
          console.log(`Vehicle found on attempt ${attempt}`);
          return;
        }
  
        console.log(`Vehicle not found, retrying...`);
      }
  
      throw new Error(
        `❌ Vehicle with license plate "${testContext.dataGLobal}" not found after ${maxRetry} retries`
      );
    }
}