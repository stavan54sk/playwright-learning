import { test } from '@playwright/test';
import { LandingPage } from '../pageObjects/LandingPage';
import { LoginPage } from '../pageObjects/LoginPage';

test('login RS Academy', async ({ page }) => {
    stealth_sync(page)
    const landingPage = new LandingPage(page);
    await landingPage.navigateToLandingPage();
    const loginPage = new LoginPage(page);
    await loginPage.enterEmail('stavan54sk@gmail.com');
    await loginPage.clickLoginButton();
    await loginPage.clickLoginPasswordButton();
    await loginPage.enterPasswordLoginEmail('stavan54sk@gmail.com');
    await loginPage.enterPasswordLoginPassword('Rpassword');
    await loginPage.clickPasswordLoginLoginButton();
    await loginPage.checkLoginSuccess();
  
});