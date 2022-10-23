const fs = require("fs");
const puppeteer = require("puppeteer");
const objects = require("./objects.js");

// scrape images from site
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
   // Specify comic issue page url
await page.goto(
  "https://mangasee123.com/read-online/" + `${objects.WoodenStick.key}` +"-chapter-002.html"
  );
  console.log("page has been loaded!");
  const issueSrcs = await page.evaluate(() => {
    const srcs = Array.from(
        document.querySelectorAll(".img-fluid")
      ).map((image) => image.getAttribute("src"));
    return srcs;
  });
  console.log("Page has been evaluated!");
  const dataCollect = fs.writeFileSync("./src/dataScrape/images.json", JSON.stringify(issueSrcs));
  console.log("File is created!");
  console.log(dataCollect)
// End Puppeteer
  await browser.close();
  } catch (err){
    console.log('you have an error')
  }
})();

//wrap in a function so this can be called whenever user selects a manga