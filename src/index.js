
// const axios = require('axios');
// const cheerio = require('cheerio');

// //performing a GET request
// axios.get('https://www.forextradingbig.com/instaforex-broker-review/')
// .then(response => {

//   //handling the success
//   const html = response.data;

//   //loading response data into a Cheerio instance
//   const $ = cheerio.load(html);

//   //selecting the elements with the data
//   const scrapedata = $('a', '.comment-bubble').text();

//   //outputting the scraped data
//   console.log(scrapedata);    

// })
// .catch( error => {
//   console.log(error);
// }); 

const fs = require("fs");
const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Specify comic issue page url
    await page.goto(
          "https://mangasee123.com/read-online/Weak-Hero-chapter-207.html"
    );
    console.log("page has been loaded!");

    const issueSrcs = await page.evaluate(() => {
      const srcs = Array.from(
        document.querySelectorAll(".img-fluid")
      ).map((image) => image.getAttribute("src"));
      return srcs;
});
console.log("Page has been evaluated!");

fs.writeFileSync("./data.json", JSON.stringify(issueSrcs));
console.log("File is created!");

// End Puppeteer
await browser.close();

  } catch (err){
    console.log('you have an error')
  }

})();


// fs.readFile("./data.json")
//   .then((data) => {
//     // Do something with the data
//     console.log(data)
//   })
//   .catch((error) => {
//     // Do something if error 
//     console.log(error)
//   });