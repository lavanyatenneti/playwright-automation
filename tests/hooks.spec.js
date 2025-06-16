const {test,expect}= require('@playwright/test');

test.describe('Test Hooks concept',()=>
{
    test.beforeAll(async ()=>
    {
        console.log("Runs before all the tests");
    });
    test.beforeEach(async({page})=>
    {
        console.log('Launching a fresh page');
        await page.goto('https://demoqa.com/text-box');
    });
    test(`Filling username@regression`,async({page})=>
    {
        await page.fill('#userName', 'Lavanya');
        await expect(page.locator('#userName')).toHaveValue('Lavanya');
    });
    test(`Filling Email@smoke`,async({page})=>
    {
        await page.fill('#userEmail', 'lavanya@example.com');
        await expect(page.locator('#userEmail')).toHaveValue('lavanya@example.com');
    });
    test.afterEach(async()=>
    {
        console.log("Test Finished cleanup ");
    });
    test.afterAll(async()=>
    {
        console.log('All Tests completed');
    })

})