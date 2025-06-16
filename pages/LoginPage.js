const { expect } =  require('@playwright/test');

class LoginPage
{
    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page)
    {
        this.page=page;
        this.usernameInput=page.locator('#username');
        this.passwordInput=page.locator('#password');
        this.submitBtn=page.locator('#submit');
        this.logoutLink=page.locator('text=Log out');
        this.successHeader=page.locator('h1');
        this.errorMsg=page.locator('#error');

    }
    async goto()
    {
        await this.page.goto('/practice-test-login/');
    }
    async login(username,password)
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitBtn.click();
    }
    async assertSuccessfulLogin()
    {
        await this.successHeader.waitFor();
        await expect(this.successHeader).toHaveText('Logged In Successfully');
        await expect(this.logoutLink).toBeVisible();
    }
    async assertFailedLogin()
    {
        await expect(this.errorMsg).toBeVisible();
        await expect(this.errorMsg).toContainText('invalid');
    }

}
module.exports={LoginPage};