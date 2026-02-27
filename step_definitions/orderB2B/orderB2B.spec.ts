import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { orderStep } from '../../pages/step/order/createOrderTrac';
import { page } from '../hooks';

let orderStepInstance: orderStep;
setDefaultTimeout(60 * 1000);

When('I navigate to menu create order', async function () {
  if (!page) throw new Error('Page is not initialized');
  orderStepInstance = new orderStep(page);
  await orderStepInstance.menucreatereservation();
});

When('I input customer data', async function () {
  await orderStepInstance.inputdatacustomer();
});

When('I input contract data', async function () {
  await orderStepInstance.inputdatacontract();
});

When('I input order type data', async function () {
  await orderStepInstance.inputdataordertype();
});

When('I input package type data', async function () {
  await orderStepInstance.inputdatapackagetype();
});

When('I input city name data', async function () {
  await orderStepInstance.inputdatacityname();
});

When('I input pick up and drop off date', async function () {
  await orderStepInstance.inputdatepickdropoff();
});

When('I input pick up and drop off time', async function () {
  await orderStepInstance.inputtimepickdropoff();
}); 

When('I add reservation', async function () {
  await orderStepInstance.submitreservation();
});

