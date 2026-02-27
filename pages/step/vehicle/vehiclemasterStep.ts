import { Page } from '@playwright/test';
import { vehicleLocator } from '../../locator/vehicle/vehicleLocator';
import { testContext } from '../../helper/utils/textContext';
import { getVehicleExternalData  } from '../../helper/read_excel/vehicleDataRead';
import { vehicleData } from '../../testdata/vehicleData';

function generateRandomString(length: number = 17): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export class vehicleStep {
  private page: Page;
  private licensePlate: string;
  private vehicleLocator: vehicleLocator;

  constructor(page: Page) {
    this.page = page;
    this.vehicleLocator = new vehicleLocator(page);
  }

  async menuvehiclemaster() {
    await this.vehicleLocator.textmenuVehicle.click();
    await this.vehicleLocator.textsubmenuVehicle.waitFor({ state: 'visible' });
    await this.vehicleLocator.textsubmenuVehicle.click();
    await this.vehicleLocator.textvehicleexternal.waitFor({ state: 'visible' });
  }

  async clicktabvehicleexternal() {
    await this.vehicleLocator.textvehicleexternal.click();
    await this.vehicleLocator.buttonaddvehicle.waitFor({ state: 'visible' });
  }

  async clickbuttonaddvehicle() {
    await this.vehicleLocator.buttonaddvehicle.click();
    await this.vehicleLocator.textvendorname.waitFor({ state: 'visible' });
  }

  async inputdatavehicle(rowIndex: number = 0) {
    const vehicle = getVehicleExternalData(rowIndex);
    await this.vehicleLocator.vendor.click();
    await this.vehicleLocator.vendor.fill(vehicle.vendorName);
    await this.page.locator(`xpath=//div[@class="ant-select-item-option-content"][contains(.,'${vehicle.vendorName}')]`).click();
  }

  async inputdatavehicletype(rowIndex: number = 0) {
    const vehicle = getVehicleExternalData(rowIndex);
    await this.vehicleLocator.selectvehicletype.fill(vehicle.vehicleType);
    await this.page.locator(`xpath=//div[@class="ant-select-item-option-content"][contains(.,'${vehicle.vehicleType}')]`).click();
  }

  async inputdatavin() {
    await this.vehicleLocator.vinnumber.fill(generateRandomString(17));
  }

  async inputlicensplate(){
    this.licensePlate = generateRandomString(8);
    await this.vehicleLocator.licenseplate.fill(this.licensePlate);
    testContext.dataGLobal = this.licensePlate;
    return this.licensePlate;
  }

  async inputenginenumber() {
    await this.vehicleLocator.enginenumber.fill(generateRandomString(12));
  }

  async scrollbottomvehicleexternal() {
    await this.vehicleLocator.referenceNumber.scrollIntoViewIfNeeded();
  }

  async inputvehicleyear(rowIndex: number = 0) {
    const vehicle = getVehicleExternalData(rowIndex);
    await this.vehicleLocator.vehicleyear.fill(vehicle.vehicle_year);
  }

  async inputfueltype(rowIndex: number = 0) {
    const vehicle = getVehicleExternalData(rowIndex);
    await this.vehicleLocator.fueltype.fill(vehicle.fuel_type);
    await this.page.locator(`xpath=//div[@class="ant-select-item-option-content"][contains(.,'${vehicle.fuel_type}')]`).click();
  }

  async inputtransmissiontype() {
    await this.vehicleLocator.transmissiontype.click();
  }

  async inputvehicledate() {
    await this.vehicleLocator.validitydate.click();
    await this.vehicleLocator.nextmonth.click();
    await this.vehicleLocator.startdate.click();
    await this.vehicleLocator.enddate.click();
  }

  async inputbusinessunit(rowIndex: number = 0) {
    const vehicle = getVehicleExternalData(rowIndex);
    await this.vehicleLocator.businessunit.fill(vehicle.business_unit);
    await this.page.locator(`xpath=//div[@class="ant-select-item-option-content"][contains(.,'${vehicle.business_unit}')]`).click();
    testContext.buGlobal = vehicle.business_unit;
    await this.vehicleLocator.branchunit.fill(vehicle.branch);
    await this.page.locator(`xpath=//div[@class="ant-select-item-option-content"][contains(.,'${vehicle.branch}')]`).click();
    await this.vehicleLocator.poolunit.fill(vehicle.pool);
    await this.page.locator(`xpath=//div[@class="ant-select-item-option-content"][contains(.,'${vehicle.pool}')]`).click();
  }

  async saveandsubmitvehicleexternal() {
    await this.vehicleLocator.submitvehicleexternal.click();
    await this.page.waitForTimeout(10000);
  }

}


