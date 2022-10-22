const data = require('./dataScrape/images.json');
// console.log(data)
const chapterIndex = require('./dataScrape/chapterList.json');
// console.log(chapterIndex)
const datesIndex = require('./dataScrape/dateList.json')
// console.log(datesIndex);

 if ($("body").data("title") === "page_homepage") {
    console.log('homepage is working')
 } else if ($("body").data("title") === "manga_viewer") {
    const parentNode = document.querySelector('#viewer');
    for (let i = 0; i < data.length; i++) {
        const newImage = document.createElement('img'); 
        newImage.classList.add('manga_page');
        newImage.setAttribute('id', 'manga_image');
        newImage.src = data[i];
        parentNode.appendChild(newImage);
    }
} else if ($("body").data("title") === "page_manga_index") {
//populates chapters + dates  on page
const indexList = document.querySelector('#index_list')

for (let i = 0; i < chapterIndex.length; i++) {
    const chapterLinks = document.createElement('a');
    chapterLinks.href = "#";
    const chapterBlock = document.createElement('div'); 
    chapterBlock.classList.add('chapt_date');
    chapterBlock.setAttribute('id', 'chapterBlock');
    chapterBlock.innerText = chapterIndex[i] + " ------" + datesIndex[i];
    indexList.appendChild(chapterLinks);
    chapterLinks.appendChild(chapterBlock)
}
//get chapter numbers only to use for pulling up images in viewer
let chapters = [];
for (let i = 0; i < chapterIndex.length; i++) {
   
chapters.push(chapterIndex[i].replace(/[^\d.-]/g, ''));
console.log(chapters);
} 
} else {
    console.log('error')
}
/* <a href="/read-online/Weak-Hero-chapter-208.html" class="list-group-item ChapterLink ng-scope" ng-repeat="Chapter in vm.Chapters | limitTo:vm.LimitChapter">
								<span style="font-weight:600" class="ng-binding">
									Chapter
									208
								</span>
								<i style="color:gray;" class="ng-binding"></i>
								<span class="float-right d-none d-md-inline ng-binding" style="color:gray;">10/12/2022</span>

								<div class="d-block d-md-none ng-binding" style="color:gray; font-size:12px;">10/12/2022</div>
							</a> */