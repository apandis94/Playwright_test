import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, Page } from '@playwright/test';
import { LoginStep } from '../pages/step/login/loginStep';
import { vehicleStep } from '../pages/step/vehicle/vehiclemasterStep';
import { orderStep } from '../pages/step/order/createOrderTrac';
import { searchingData } from '../pages/helper/searchingData';
import '../pages/env/env';

setDefaultTimeout(60 * 1000);

export let browser: Browser | undefined;
export let page: Page | undefined;

export let loginStep: LoginStep;
export let vehicleStepInstance: vehicleStep;
export let searchingdataUniv: searchingData;
export let orderStepInstance: orderStep;


export function setBrowser(b: Browser) {
  browser = b;
}

export function setPage(p: Page) {
  page = p;
}

Before(async () => {
});