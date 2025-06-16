const{test,expect}=require('@playwright/test');

test('Table handling test',async ({page})=>
{
    await page.goto('https://demoqa.com/webtables');
     const rows=page.locator('.rt-tr-group');
     const rowcount=rows.count();

     for(let i=0;i<rowcount;i++)
     {
        const rowText=await rows.nth(i).textContent();
        console.log(`Row${i+1}: `+rowText.trim());
     }

     const cell=page.locator('.rt-tr-group>>.rt-td').filter({hasText:/^Cierra$/});
     const cellcount=await cell.count();
     console.log(`cellcount is ${cellcount}`);
     await expect(cell).toBeVisible();
});