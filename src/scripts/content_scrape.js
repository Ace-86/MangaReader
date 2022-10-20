const fs = require("fs");
const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
   // Specify comic issue page url
await page.goto(
  "https://mangasee123.com/manga/Weak-Hero"
  );
  console.log("page has been loaded!");
  await page.click('div.list-group-item')
  const contentMain = await page.evaluate(() => {
    
    const contentIndex = Array.from(
        document.querySelectorAll("a > span:first-of-type")
      ).map((text) => text.innerText);
    return contentIndex;
  });
  console.log("Page has been evaluated!");
  const dataIndex = fs.writeFileSync("./src/dataScrape/chapterList.json", JSON.stringify(contentMain));
 
  console.log("File is created!");
  console.log(dataIndex)
// End Puppeteer
  await browser.close();
  } catch (err){
    console.log('you have an error')
  }
})();

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
   // Specify comic issue page url
await page.goto(
  "https://mangasee123.com/manga/Weak-Hero"
  );
  console.log("page has been loaded!");
  await page.click('div.list-group-item')
  const contentMain = await page.evaluate(() => {
      const dateIndex = Array.from(
        document.querySelectorAll("a > span:nth-of-type(2)")
      ).map((date) => date.innerText);
    return  dateIndex;
  });
  console.log("Page has been evaluated!");
  const datesIndex = fs.writeFileSync("./src/dataScrape/dateList.json", JSON.stringify(contentMain));
  console.log("File is created!");
  console.log(datesIndex)
// End Puppeteer
  await browser.close();
  } catch (err){
    console.log('you have an error')
  }
})();