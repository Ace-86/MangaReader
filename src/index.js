const data = require('../data.json');
// console.log(data)
const chapterIndex = require('../contents.json')
console.log(chapterIndex)
const datesIndex = require('../dates.json')
console.log(datesIndex);

const parentNode = document.querySelector('#viewer');

//dont activate unless user selects the manga and chapter they want
for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    const newImage = document.createElement('img'); 
    newImage.classList.add('manga_page');
    newImage.setAttribute('id', 'manga_image');
    newImage.src = data[i];
    parentNode.appendChild(newImage);
}
