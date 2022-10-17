const data = require('../data.json');
console.log(data)

const parentNode = document.querySelector('#viewer');


for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    const newImage = document.createElement('img'); 
    newImage.src = data[i];
    parentNode.appendChild(newImage);
}

