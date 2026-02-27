import { Page } from '@playwright/test';
import { orderLocator } from '../../locator/order/locatorOrderTrac';
import { testContext } from '../../helper/utils/textContext';
import { getVehicleExternalData  } from '../../helper/read_excel/vehicleDataRead';
import { vehicleData } from '../../testdata/vehicleData';

export class orderStep {
  private page: Page;
  private orderLocator: orderLocator;

  constructor(page: Page) {
    this.page = page;
    this.orderLocator = new orderLocator(page);
  }

  async menucreatereservation() {
    await this.orderLocator.menureservation.click();
    await this.orderLocator.menucreateorder.waitFor({ state: 'visible' });
    await this.orderLocator.menucreateorder.click();
    await this.orderLocator.pagecarrental.waitFor({ state: 'visible' });
  }

  async inputdatacustomer() {
    await this.orderLocator.customername.fill('BANK CENTRAL ASIA, TBK');
    await this.page.waitForTimeout(3000);
    await this.page.locator('.ant-select-item-option-content').filter({ hasText: 'BANK CENTRAL ASIA, TBK' }).click();
  }

  async inputdatacontract() {
    await this.orderLocator.contractnumber.fill('2100001864');
    await this.page.locator('.ant-select-item-option-content').filter({ hasText: '2100001864' }).click();
    await this.page.waitForTimeout(3000);
    await this.orderLocator.buttonnextpage.click();
    await this.page.waitForTimeout(3000);
  }

  async inputdataordertype() {
    await this.page.locator('//label[span[text()="With Driver"]]').click();
  }

  async inputdatapackagetype() {
    await this.orderLocator.inputpackagetype.click();
    await this.page.locator('.ant-select-item-option-content').getByText('4H', { exact: true }).click();
  }

  async inputdatacityname() {
    await this.orderLocator.inputcityname.fill('MALANG');
    await this.page.locator('.ant-select-item-option-content').filter({ hasText: 'MALANG' }).click();
  }

  async inputdatepickdropoff() {
    await this.orderLocator.pickupdate.fill('15 March 2026');
    await this.page.keyboard.press('Enter');
    await this.orderLocator.dropoffdate.fill('15 March 2026');
    await this.page.keyboard.press('Enter');
  }

  async inputtimepickdropoff() {
    await this.orderLocator.inputtimepickdropoff.fill('08:00');
    await this.page.keyboard.press('Enter');
  }

  async submitreservation() {
    await this.orderLocator.buttonaddreservation.click();
    await this.page.waitForTimeout(2000);
    await this.orderLocator.buttonnextpage.click();
    // await this.page.waitForTimeout(5000);
  }
}


