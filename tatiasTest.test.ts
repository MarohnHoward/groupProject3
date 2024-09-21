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
});


test ('add a product to the shopping cart', async () => {
    await page.click(page.shopAll);
    await page.click(page.orangeBlossom);
    await page.driver.sleep(1000);
    await page.click(page.arrowBtn);
    await page.driver.sleep(1000);
    await page.click(page.arrowBtn);
    await page.driver.sleep(1000);
    await page.click(page.arrowBtn);
    await page.driver.sleep(1000);
    await page.click(page.addToCart);
    await page.driver.sleep(1000);
    await page.click(page.header);
    await page.driver.sleep(1000);
   
});

test ('email me when back in stock', async () => {
    await page.setInput(page.searchBar, 'Snow man\n');
    //await page.click(page.snowMan);
    await page.driver.sleep(1000);
    await page.click(page.viewProduct);
    await page.driver.sleep(1000);
    await page.setInput(page.yourEmailAddress, 'abcdloeh@hijl.pnk');
    await page.driver.sleep(1000);
    await page.click(page.emailMe);
    await page.driver.sleep(1000);
});

test ('take a quiz', async () => {
    await page.click(page.takeAQuiz);
    await page.click(page.startQuiz);
    await page.driver.sleep(1000);
    await page.click(page.natureLandscapes);
    await page.driver.sleep(1000);
    await page.click(page.medium);
    await page.driver.sleep(1000);
    await page.click(page.round);
    await page.driver.sleep(1000);
    await page.driver.quit();
});