const {test,expect}=require('@playwright/test');
const path=require('path');
test('Upload file',async({page})=>{
    await page.goto('https://demoqa.com/upload-download');

    const filepath=path.resolve("C:\\Users\\lavan\\OneDrive\\Desktop\\wordcount.txt");
    await page.setInputFiles('#uploadFile',filepath);

    const uploadedtextcontent=await page.locator('#uploadedFilePath').textContent();
    expect(uploadedtextcontent).toContain('wordcount.txt');
});