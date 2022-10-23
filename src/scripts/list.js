const chapterIndex = require('../dataScrape/chapterList.json')
// console.log(chapterIndex)
const datesIndex = require('../dataScrape/dateList.json')
// console.log(datesIndex);

const call = () => {
// populates chapters + dates  on page
const indexList = document.querySelector('#manga_list')

for (let i = 0; i < chapterIndex.length; i++) {
    // console.log(data[i]);
    const chapterBlock = document.createElement('div'); 
    chapterBlock.classList.add('chapt_date');
    chapterBlock.setAttribute('id', 'chapterBlock');
    chapterBlock.innerText = chapterIndex[i];
    indexList.appendChild(chapterBlock);
}
}

export {call}