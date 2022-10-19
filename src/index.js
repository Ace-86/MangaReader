// const data = require('./dataScrape/images.json');
// console.log(data)
// const chapterIndex = require('./dataScrape/chapterList.json')
// console.log(chapterIndex)
// const datesIndex = require('./dataScrape/dateList.json')
// console.log(datesIndex);

// const parentNode = document.querySelector('#viewer');

// //dont activate unless user selects the manga and chapter they want
// for (let i = 0; i < data.length; i++) {
//     // console.log(data[i]);
//     const newImage = document.createElement('img'); 
//     newImage.classList.add('manga_page');
//     newImage.setAttribute('id', 'manga_image');
//     newImage.src = data[i];
//     parentNode.appendChild(newImage);
// }


const chapterIndex = require('./dataScrape/chapterList.json');
console.log(chapterIndex)
const datesIndex = require('./dataScrape/dateList.json')
console.log(datesIndex);


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

for (let i = 0; i < chapterIndex.length; i++) {
chapterIndex[i].replace(/[^\d.-]/g, '');
console.log(chapter);
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