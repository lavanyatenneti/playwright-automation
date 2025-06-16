const{test,expect}=  require('@playwright/test');

test('Alerts validation',async({page})=>
{
    await page.goto('https://demoqa.com/alerts');
    
    page.once('dialog',async dialog=>
    {
        expect (dialog.message()).toContain('You clicked a button');
        await dialog.accept();
    });
    await page.click('#alertButton');

    page.once('dialog',async dialog=>{
        expect(dialog.message()).toContain('confirm');
        await dialog.dismiss();
    });
    await page.click('#confirmButton');

    page.once('dialog',async dialog=>{
        expect(dialog.message()).toContain('Please enter your name');
        await dialog.accept('Lavanya');
    });
    await page.click('#promtButton');
})