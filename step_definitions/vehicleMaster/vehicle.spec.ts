import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { vehicleStep } from '../../pages/step/vehicle/vehiclemasterStep';
import { searchingData } from '../../pages/helper/searchingData';
import { page } from '../hooks';

let vehicleStepInstance: vehicleStep;
let searchingDataInstance: searchingData;
setDefaultTimeout(60 * 1000);

When('I navigate to vehicle master', async function () {
  if (!page) throw new Error('Page is not initialized');
  vehicleStepInstance = new vehicleStep(page);
  await vehicleStepInstance.menuvehiclemaster();
});

When('I click on external tab', async function () {
  await vehicleStepInstance.clicktabvehicleexternal();
});

When('I click add new vehicle', async function () {
  await vehicleStepInstance.clickbuttonaddvehicle();
});

When('I input vehicle data', async function () {
  await vehicleStepInstance.inputdatavehicle();
});

When('I input vehicle type', async function () {
  await vehicleStepInstance.inputdatavehicletype();
});

When('I input vin number', async function () {
  await vehicleStepInstance.inputdatavin();
});

When('I input license plate', async function () {
  await vehicleStepInstance.inputlicensplate();
});

When('I input engine number', async function () {
  await vehicleStepInstance.inputenginenumber();
});

When('I scroll to bottom of vehicle external form', async function () {
  await vehicleStepInstance.scrollbottomvehicleexternal();
});

When('I input vehicle year', async function () {
  await vehicleStepInstance.inputvehicleyear();
});

When('I input fuel type', async function () {
  await vehicleStepInstance.inputfueltype();
});

When('I input transmission type', async function () {
  await vehicleStepInstance.inputtransmissiontype();
});

When('I input vehicle date', async function () {
  await vehicleStepInstance.inputvehicledate();
});

When('I input business unit', async function () {
  await vehicleStepInstance.inputbusinessunit();
});

When('I verify vehicle creation', async function () {
  if (!page) throw new Error('Page is not initialized');
  searchingDataInstance = new searchingData(page);
  await searchingDataInstance.searchingdatacreatefms();
});

Then('Save and submit vehicle external', async function () {
  await vehicleStepInstance.saveandsubmitvehicleexternal();
});