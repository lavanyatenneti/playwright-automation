const {test,expect}=  require('@playwright/test');

test('Radio button handling',async({page})=>
{
    await page.goto('https://demoqa.com/radio-button');
    await page.locator('label[for="yesRadio"]').click();
    await expect(page.locator('.text-success')).toHaveText('Yes');

    await page.locator('label[for="impressiveRadio"]').click();
    //await page.getByLabel("Impressive").click();
    await expect(page.locator('.text-success')).toHaveText('Impressive');

    const noradiobutton=page.locator('#noRadio')
    expect(await noradiobutton.isDisabled()).toBe(true);

})