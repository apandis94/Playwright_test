import { Page } from '@playwright/test';

export class LoginPage {
  readonly emailInput;
  readonly passwordInput;
  readonly submitButton;
  readonly afterLogin;
  readonly buttonmfa;
  readonly inputusermfa;
  readonly inputpassmfa;
  readonly buttonnextmfa;
  readonly buttonloginmfa;
  readonly buttonloginsuccestmfa;
  // Login trac web locator
  readonly inputusertrac;
  readonly passwordtrac;
  readonly submitbuttontrac;
  readonly successlogintrac1;
  readonly successlogintrac2;
  readonly mfatracloginbutton;
  readonly otpinput;
  readonly otpverifybutton;

  constructor(page: Page) {
    this.emailInput = page.locator('input[id="login_email"]');
    this.passwordInput = page.locator('input[id="login_password"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.afterLogin = page.getByText('Dashboard').nth(0);
    this.buttonmfa = page.getByText('Login with Microsoft Account');
    this.inputusermfa = page.locator('input[id="i0116"]');
    this.buttonnextmfa = page.locator('input[id="idSIButton9"]');
    this.inputpassmfa = page.locator('input[id="i0118"]');
    this.buttonloginmfa = page.locator('input[id="idSIButton9"]');
    this.buttonloginsuccestmfa = page.getByText('Yes');
    // Login trac web locator
    this.inputusertrac = page.locator('input[id="login-email-input"]');
    this.passwordtrac = page.locator('input[id="Password"]');
    this.submitbuttontrac = page.locator('button[id="login-signin-button"]');
    this.successlogintrac1 = page.getByText('Welcome to Dashboard');
    this.successlogintrac2 = page.getByText('TRAC B2C Industry');
    this.mfatracloginbutton = page.getByText('Login with Internal Account (MFA)');
    this.otpinput = page.locator('input[id="idTxtBx_SAOTCC_OTC"]');
    this.otpverifybutton = page.locator('input[id="idSubmit_SAOTCC_Continue"]');
  }
}