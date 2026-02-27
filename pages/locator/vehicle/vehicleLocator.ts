import { Page } from '@playwright/test';

export class vehicleLocator {
    readonly page: Page;
    readonly textmenuVehicle;
    readonly textsubmenuVehicle;
    readonly textvehicleexternal;
    readonly buttonaddvehicle;
    readonly textvendorname;
    readonly vendor;
    readonly selectvendor;
    readonly selectvehicletype;
    readonly vinnumber;
    readonly licenseplate;
    readonly enginenumber;
    readonly referenceNumber;
    readonly vehicleyear;
    readonly fueltype;
    readonly transmissiontype;
    readonly validitydate;
    readonly nextmonth; 
    readonly startdate; 
    readonly enddate;
    readonly businessunit;
    readonly branchunit;
    readonly poolunit;
    readonly submitvehicleexternal;
    readonly frontbusinessunit;
    readonly searchinglicensplate;
    readonly tablelistvehicle;
    readonly buttonsearchvehicle;
  
    constructor(page: Page) {
      this.page = page;
      this.textmenuVehicle = page.getByText('Vehicle Inventory');
      this.textsubmenuVehicle = page.getByText('Vehicle Master');
      this.textvehicleexternal = page.getByText('External');
      this.buttonaddvehicle = page.getByText('Add New Vehicle');
      this.textvendorname = page.locator('label[for="vendor"]');
      this.vendor = page.locator('input[id="vendor"]');
      this.selectvehicletype = page.locator('input[id="vehicleTypeId"]');
      this.vinnumber = page.locator('input[id="vin"]');
      this.licenseplate = page.locator('input[id="licensePlate"]');
      this.enginenumber = page.locator('input[id="engineNumber"]');
      this.referenceNumber = page.locator('input[id="referenceNumber"]');
      this.vehicleyear = page.locator('input[id="vehicleYear"]');
      this.fueltype = page.locator('input[id="fuelTypeId"]');
      this.transmissiontype = page.locator('input[type="radio"][value="1"]');
      this.validitydate = page.locator('input[id="validityDate"]');
      this.nextmonth = page.locator('button.ant-picker-header-next-btn').nth(1);
      this.startdate = page.locator('td[title="2026-03-01"]');
      this.enddate = page.locator('td[title="2026-03-15"]');
      this.businessunit = page.locator('input[id="businessUnit"]');
      this.branchunit = page.locator('input[id="branch"]');
      this.poolunit = page.locator('input[id="poolAssigment"]');
      this.submitvehicleexternal = page.getByText('Save');
      this.frontbusinessunit = page.locator('input[id="rc_select_2"]');
      this.searchinglicensplate = page.locator('input[id="rc_select_1"]');
      this.tablelistvehicle = page.locator('tbody.ant-table-tbody');
      this.buttonsearchvehicle = page.locator('(//button[@type="button"])[3]');
  }
}