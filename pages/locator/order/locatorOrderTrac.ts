import { Page } from '@playwright/test';

export class orderLocator {
  readonly menureservation;
  readonly menucreateorder;
  readonly pagecarrental;
  readonly customername;
  readonly contractnumber;
  readonly buttonnextpage;    
  readonly inputpackagetype;
  readonly inputcityname;
  readonly pickupdate;
  readonly dropoffdate;
  readonly inputtimepickdropoff;
  readonly buttonaddreservation;

  constructor(page: Page) {
    this.menureservation = page.getByText('Reservation');
    this.menucreateorder = page.locator('span.ant-menu-title-content:has-text("Create Reservation")');
    this.pagecarrental = page.getByText('Car Rental');  
    this.customername = page.locator('input[id="reservation-company-select"]');
    this.contractnumber = page.locator('xpath=//span[@class="ant-select-selection-search"]/input[@id="reservation-contract-select"]').nth(0);
    this.buttonnextpage = page.locator('button:has-text("Next")');
    this.inputpackagetype = page.locator('input[id="reservation-package-select"]');
    this.inputcityname = page.locator('input[id="reservation-city-select"]');
    this.pickupdate = page.locator('input[id="basic_pickupDate"]');
    this.dropoffdate = page.locator('input[placeholder="End date"]');
    this.inputtimepickdropoff = page.locator('input[id="basic_startTime"]');
    this.buttonaddreservation = page.locator('button[id="reservation-add-date-button"]');
}
}