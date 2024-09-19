import { FourPaws } from "./dogPage";
const paws = new FourPaws(); 

test('Adding Tactical Collar', async () => {
    await paws.navigate(); 
    await paws.click(paws.store); 
    await paws.click(paws.shop); 
    await paws.click(paws.collars); 
    await paws.driver.sleep(2000)
    await paws.scrollToElement(paws.tacCol); 
    await paws.click(paws.tacCol); 
    await paws.click(paws.colorSel); 
    await paws.click(paws.color); 
    await paws.click(paws.sizeSel);
    await paws.driver.sleep(2000) 
    await paws.click(paws.size); 
    await paws.scrollToElement(paws.purchase); 
    await paws.click(paws.purchase); 
    await paws.driver.navigate().back(); 
}); 
test('Adding Leash', async () => {
    await paws.navigate(); 
    await paws.click(paws.store); 
    await paws.click(paws.shop); 
    await paws.click(paws.leashes); 
    await paws.scrollToElement(paws.tacCol); 
    await paws.click(paws.tacCol); 
    await paws.click(paws.colorSel); 
    await paws.click(paws.color); 
    await paws.click(paws.giveMe); 
    await paws.driver.navigate().back(); 
    await paws.driver.quit(); 
}); 