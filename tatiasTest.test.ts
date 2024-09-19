import { TatiasPage } from "./tatiasPage";
const page = new TatiasPage();

test ('log in to the account', async () => {
    await page.navigate();
    await page.click(page.noThanks);
    await page.click(page.iconBtn);
    await page.driver.sleep(1000);
    await page.setInput(page.emailField, 'loveandboneandlove@91ail.com');
    await page.setInput(page.passwordField, 'devmountain');
    await page.click(page.signIn);

});