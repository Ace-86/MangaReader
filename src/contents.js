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
  const contentMain = await page.evaluate(() => {
    const contentIndex = Array.from(
        document.querySelectorAll("span.ng-binding")
      ).map((image) => image.getAttribute("src"));
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


{/* <a href="/read-online/Weak-Hero-chapter-208.html" class="list-group-item ChapterLink ng-scope" ng-repeat="Chapter in vm.Chapters | limitTo:vm.LimitChapter">
								<span style="font-weight:600" class="ng-binding">
									Chapter
									208
								</span>
								<i style="color:gray;" class="ng-binding"></i>
								<!-- ngIf: vm.IsNew(Chapter.Date) -->
								<!-- ngIf: Chapter.Chapter == vm.LastChapterRead -->

								<span class="float-right d-none d-md-inline ng-binding" style="color:gray;">10/12/2022</span>

								<div class="d-block d-md-none ng-binding" style="color:gray; font-size:12px;">10/12/2022</div>
							</a> */}