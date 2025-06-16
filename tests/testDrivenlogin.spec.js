const{test,expect}=require('@playwright/test');
const loginData=require('./data/loginData');

test.describe('DataDriven Login tests',()=>
{
    test.beforeEach(async ({page})=>
    {
       await page.goto('https://practicetestautomation.com/practice-test-login/');
    });
    for(const data of loginData)
    {
        test(`Login test for ${data.username} (expected:${data.shouldPass ?'Pass':'Fail'})`,async({page})=>
        {
            await page.fill('#username',data.username);
            await page.fill('#password',data.password);
            await page.click('#submit');

            if(data.shouldPass)
            {
                await expect(page.locator('h1')).toHaveText('Logged In Successfully');
                await expect(page.locator('text=Log out')).toBeVisible();
            }
            else
            {
                await expect(page.locator('#error')).toBeVisible();
                await expect(page.locator('#error')).toContainText('Your username or password is invalid!');

            }
        });
    }
});