const fs = require("fs");
const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
   // Specify comic issue page url
await page.goto(
  "https://mangasee123.com/read-online/Weak-Hero-chapter-202.html"
  );
  console.log("page has been loaded!");
  const issueSrcs = await page.evaluate(() => {
    const srcs = Array.from(
        document.querySelectorAll(".img-fluid")
      ).map((image) => image.getAttribute("src"));
    return srcs;
  });
  console.log("Page has been evaluated!");
  const dataCollect = fs.writeFileSync("./data.json", JSON.stringify(issueSrcs));
  console.log("File is created!");
  console.log(dataCollect)
// End Puppeteer
  await browser.close();
  } catch (err){
    console.log('you have an error')
  }
})();

