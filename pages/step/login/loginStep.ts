import { Page, Browser } from '@playwright/test';
import * as OTPAuth from 'otpauth';
import { LoginPage } from '../../locator/login/loginLocator';
import { getLoginData, LoginData } from '../../helper/read_excel/loginDataRead';
import path from 'path';

export class LoginStep {
  private page: Page;
  private baseURL: string;

  constructor(page: Page, baseURL: string) {
    this.page = page;
    this.baseURL = baseURL;
  }

  async loginwebfms(rowIndex: number = 0) {
    const loginPage = new LoginPage(this.page);
    const loginData = getLoginData(rowIndex) as LoginData;
      if (loginData.login_type === 'MFA') { 
        console.log('🔐 Login using MFA account');
        await loginPage.buttonmfa.waitFor({ state: 'visible' });
        await loginPage.buttonmfa.click();
        await loginPage.inputusermfa.fill(loginData.username);
        await loginPage.buttonnextmfa.click();
        await loginPage.inputpassmfa.fill(loginData.password);
        await loginPage.buttonloginmfa.click();
        await loginPage.buttonloginsuccestmfa.click();
      } else {
        console.log('🔐 Login using FMS account');
        await loginPage.buttonmfa.waitFor({ state: 'visible' });
        await loginPage.emailInput.fill(loginData.username);
        await loginPage.passwordInput.fill(loginData.password);
        await loginPage.submitButton.click();
      }
      await loginPage.afterLogin.waitFor({ state: 'visible' });
  }

  async loginTracWeb(rowIndex: number = 1) {
    const loginPage = new LoginPage(this.page);
    const loginData = getLoginData(rowIndex) as LoginData;
    if (!loginData?.username || !loginData?.password) {
      throw new Error(`❌ Invalid login data at Excel row ${rowIndex + 2}`);
    }
    if (loginData.login_type === 'MFA') {
      await loginPage.mfatracloginbutton.waitFor({ state: 'visible' });
      await loginPage.mfatracloginbutton.click();
      await loginPage.inputusermfa.fill(loginData.username);
      await loginPage.buttonnextmfa.click();
      await loginPage.inputpassmfa.fill(loginData.password);
      await loginPage.buttonloginmfa.click();
      // ------------------------------------------ Generate OTP from base file 32 / 64 -----------------------------------//
          const totp = new OTPAuth.TOTP({
          issuer: 'Generate OTP',
          label: loginData.username,
          algorithm: 'SHA1',
          digits: 6,
          period: 30,
          secret: loginData.otp_key,
          });

        const kodeOTP = totp.generate();
        console.log(`Kode OTP: ${kodeOTP}`);
      // ------------------------------------------ Generate OTP from base file 32 / 64 -----------------------------------//
      await loginPage.otpinput.fill(kodeOTP);
      await loginPage.otpverifybutton.click();
      await loginPage.buttonloginsuccestmfa.click();
      // ------------------------------------------ Save cookie -----------------------------------------//
      const statePath = path.join(__dirname, 'tracLogin/loginState.json');
      await this.page.context().storageState({ path: statePath });
    } else {
      await loginPage.inputusertrac.waitFor({ state: 'visible' });
      await loginPage.inputusertrac.fill(loginData.username);
      await loginPage.passwordtrac.fill(loginData.password);
      await loginPage.submitbuttontrac.click();
      await loginPage.successlogintrac1.waitFor({ state: 'visible' });    
      await loginPage.successlogintrac2.waitFor({ state: 'visible' });
    }
  }

}