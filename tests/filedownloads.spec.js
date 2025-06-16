const {test,expect}=require('@playwright/test');
const fs=require('fs');

test('FileDownload functionality',async({page})=>
{
    await page.goto('https://demoqa.com/upload-download');

    const[download]= await Promise.all([
        page.waitForEvent('download'),
        page.click('#downloadButton')
    ]);

    const downloadpath=await download.path();
    expect(downloadpath).not.toBeNull();

    const suggestedFileName=download.suggestedFilename();
    expect(suggestedFileName).toBe('sampleFile.jpeg');

    await download.saveAs(`downloads/${suggestedFileName}`);

});