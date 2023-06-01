console.log('JS OK')

// *PHASE 1
// Link to DOM Element
const forward = document.querySelector('.fa-forward');
const backward = document.querySelector('.fa-backward');
const imgElement = document.querySelector('.images');

// Create array with images
const images = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp',];

// Created image active variable
let active = '';

// Create index variable
let index = 0;

console.log(images);

// Prepare html injection string
for (let i = 0; i < images.length; i++) {
    active += `<img src="${images[i]}" class="active"></img>`;
}

// Add HTML elements in DOM
imgElement.innerHTML = active;
