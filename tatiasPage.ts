import { By } from "selenium-webdriver";
import { BasePage } from "./basePage"; 
const fs = require('fs')

export class TatiasPage extends BasePage {
    noThanks: By = By.xpath('//div[text()="No, thanks"]');
    xBtn: By = By.xpath('//button[@class="system-btn close prompt-close-btn"]');
    iconBtn: By = By.xpath('//div[@class="Header-icon Header-icon--account h-full flex flex-col justify-between items-center gap-0.5"]');
    emailField: By = By.name('customer[email]');
    passwordField: By = By.name ('customer[password]');
    signIn: By = By.xpath('//input[@class="w-full tracking-wider text-xs font-body font-bold uppercase cursor-pointer rounded-full transition-colors bg-black border-2 border-solid border-transparent text-center py-3 text-white hover:bg-[#5A5A5A] mt-5"]');
    signOut: By = By.xpath('//a[@class="js-logout bg-[#F8F3F5] ml-2 mt-10 flex items-center gap-1 p-0.5 pl-3 pr-4 text-sm text-black capitalize w-max rounded-full group hover:bg-black hover:text-white"]');

    constructor () {
        super ({url: 'https://www.diamondartclub.com/'});
    };

    async scrollToElement(elementBy: By) {
        const scrollThing = await this.getElement(elementBy);
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform()};

    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000);
        fs.writeFile(`${__dirname}/DiamondArtClub.png`,
            await this.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log('Its Diamond Art Club');
            }
        )
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };
};
