const {test,expect}=  require('@playwright/test');

test('iframe handling test',async ({page})=>
{
    await page.goto('https://demoqa.com/frames');

    const frameelement=await page.frameLocator('#frame1');

    const heading=frameelement.locator('h1');
    await expect(heading).toHaveText('This is a sample page');
})