const{test,expect}=require('@playwright/test');

test.describe('Login Functionality',()=>
{
    test.beforeEach(async ({page})=>
    {
        await page.goto('https://practicetestautomation.com/practice-test-login/');
    });


    test('Login test',async({page})=>
    {
    
         //TestData inline
        const username='student';
        const password='Password123';

        await page.fill('#username',username);
        await page.fill('#password',password);
        await page.locator('#submit').click();

        await expect(page.locator('h1')).toContainText('Logged');
        await expect(page.locator('.post-title')).toBeVisible();
        await expect(page.locator('text=Log out')).toBeVisible();
    });
});