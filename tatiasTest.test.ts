import { Driver } from "selenium-webdriver/chrome";
import { TatiasPage } from "./tatiasPage";
const page = new TatiasPage();

test ('log in to the account', async () => {
    await page.navigate();
    await page.click(page.noThanks);
    await page.driver.sleep(1000);
    await page.click(page.iconBtn);
    await page.driver.sleep(1000);
    //await page.click(page.xBtn);
    await page.setInput(page.emailField, 'loveandboneandlove@91ail.com');
    await page.setInput(page.passwordField, 'devmountaintest');
    await page.click(page.signIn);
    await page.driver.sleep(1000);
    await page.click(page.signOut);
    await page.driver.quit();
});