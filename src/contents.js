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
        document.querySelectorAll("a > span.ng-binding")
      ).map((text) => text.innerText);
    return contentIndex;
  });
  console.log("Page has been evaluated!");
  const dataIndex = fs.writeFileSync("./contents.json", JSON.stringify(contentMain));
  console.log("File is created!");
  console.log(dataIndex)
// End Puppeteer
  await browser.close();
  } catch (err){
    console.log('you have an error')
  }
})();


// {/* <div class="list-group-item ShowAllChapters ng-scope" ng-click="vm.LimitChapter = vm.Chapters.length" ng-if="vm.LimitChapter < vm.Chapters.length - 1">
// 								Show All Chapters
// 								<i class="fas fa-chevron-down float-right" style="margin-top:4px;"></i>
// 							</div> */}