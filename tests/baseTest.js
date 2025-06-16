const{test:base,expect}= require('@playwright/test');
const{LoginPage}=  require('../pages/LoginPage');

exports.test=base.extend({
    loginPage:async ({page},use)=>{
        const loginpage=new LoginPage(page);
        await use(loginpage);
    }
});
exports.expect=expect;
