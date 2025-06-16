const {test,expect}= require('@playwright/test');

test("Playwright test", async ({page})=>
{
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);

    //validate heading
    const heading=await page.locator('h1');
    await expect(heading).toContainText('Playwright');
})