const {test,expect}= require('@playwright/test');

test('test with dropdown menu',async({page})=>
{
    await page.goto('https://demoqa.com/select-menu');

    const dropdown=page.locator('#oldSelectMenu');
    dropdown.selectOption('Red');

    const selectedvalue=await dropdown.inputValue();
    await expect(selectedvalue).toBe('red');
    await page.screenshot({path:'debugger.png',fullPage:true});

    await page.locator('#cars').selectOption([{label:'Volvo'},{label:'Opel'}]);

    const moderndropdown=await page.locator('#withOptGroup').click();

    await page.getByText('Group 1, option 1',{exact:true}).nth(0).click();



})