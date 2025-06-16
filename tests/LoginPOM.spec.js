const{test,expect}= require('@playwright/test');
const{LoginPage} =  require('../pages/LoginPage');
//const{LoginPage}= require('../pages/LoginPage');
const LoginData=require('./data/loginData');

test.describe('Login test using Page object model',()=>
{
   LoginData.forEach((data,index)=>{
        test(`${index+1}Login with username: "${data.username}"`,async({page})=>
        {
            const loginPage=new LoginPage(page);
            await loginPage.goto();
            await loginPage.login(data.username,data.password);

            if(data.shouldPass)
            {
                await loginPage.assertSuccessfulLogin();
            }
            else{
                await loginPage.assertFailedLogin();
            }

        });
   });
});

