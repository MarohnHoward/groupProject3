import { By } from "selenium-webdriver";
import {BasePage} from './basePage'; 

export class FourPaws extends BasePage {
    store: By = By.xpath('(//a[@class="header-nav-folder-title preScale scaleIn"])[1]'); 
    shop: By = By.xpath('(//span[@class="header-nav-folder-item-content"])[1]'); 
    collars: By = By.xpath('(//a[text()="Collars"])[1]'); 
    tacCol: By = By.xpath('(//a[@class="grid-item-link product-lists-item"])[3]'); 
    colorSel: By = By.xpath('(//select)[1]'); 
    sizeSel: By = By.xpath('(//select)[2]');  
    color: By = By.xpath('//option[@value="Wine"]'); 
    size: By = By.xpath('(//option)[18]'); 
    purchase: By = By.xpath('//div[text()="Purchase"]'); 
    leashes: By = By.xpath('(//a[text()="Leashes"])[1]'); 
    leash: By = By.xpath('(//div[@class="grid-title"])[3]'); 
    giveMe: By = By.xpath('//div[text()="GIVE ME!"]'); 
    constructor() {
        super({url: "https://www.4pawsleatherco.com/"}); 
    }; 
    async scrollToElement(elementBy: By) {
        const scrollThing = await this.getElement(elementBy); 
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform()
    }; 
}; 