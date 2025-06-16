const{test,expect}=  require('./baseTest');
const loginData=require('./data/loginData');

test.describe('Login with Base Test Structure',()=>
{
    loginData.forEach((data,index) =>
     {
        
         test(`${index+1} Login with username "${data.username}"`,async({loginPage})=>
        {
            await loginPage.goto();
            await loginPage.login(data.username,data.password);

            if(data.shouldPass)
            {
                await loginPage.assertSuccessfulLogin();
            }
            else
            {
                await loginPage.assertFailedLogin();
            }
        });
    });
});