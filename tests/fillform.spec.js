const {test,expect}= require('@playwright/test');

test.beforeEach(async ({page})=>
{
    await page.goto('https://demoqa.com/text-box');
});

test("Fill form",async ({page})=>
{
    
    const username= page.locator('#userName');
    await expect(username).toBeVisible();
    await expect(username).toHaveAttribute('placeholder','Full Name');
    await page.fill('#userName','Lavanya');
    await expect(username).toHaveValue('Lavanya');
    await page.fill('#userEmail','Lavanya123@gmail.com');
    await page.fill('#currentAddress','ofallon 63368');
    await page.fill('#permanentAddress','India');
    await page.click('#submit');
    const nameoutput=await page.locator('#name');
    await expect(nameoutput).toHaveText('Name:Lavanya');
    await page.waitForTimeout(5000);
    //await expect(nameoutput).toHaveValue('Lavanya');
    const emailoutput= await page.locator('#email');
    await expect(emailoutput).toHaveText('Email:Lavanya123@gmail.com');

});

test('Link locator accesing',async ({page})=>
{
    await page.goto('https://demoqa.com/links');
    const links=page.locator('a');

    await links.nth(4).click();

    const responsetext=page.locator('#linkResponse');
    await expect(responsetext).toContainText('Created');
});
test.afterEach(async ()=>
{
    console.log('Testcase completed');
});