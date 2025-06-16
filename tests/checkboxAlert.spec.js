const {test,expect}=  require('@playwright/test');

test('Checkbox validation',async({page})=>
{
    await page.goto('https://demoqa.com/checkbox');
    await page.locator('label[for="tree-node-home"]').waitFor({state:'visible'});
    await page.locator('label[for="tree-node-home"]').click();
    await expect(page.locator('#result')).toContainText('notes');

});