// const chapterIndex = require('../contents.json')
// console.log(chapterIndex)
// const datesIndex = require('../dates.json')
// console.log(datesIndex);

const indexList = document.querySelector('#index_list')

for (let i = 0; i < chapterIndex.length; i++) {
    // console.log(data[i]);
    const chapterBlock = document.createElement('div'); 
    chapterBlock.classList.add('chapt_date');
    chapterBlock.setAttribute('id', 'chapterBlock');
    chapterBlock.innerText = chapterIndex[i];
    indexList.appendChild(chapterBlock);
}
console.log('hello')