console.log('JS OK')

// *PHASE 1
// Link to DOM Element
const forward = document.querySelector('.fa-forward');
const backward = document.querySelector('.fa-backward');

const imgBox = document.querySelector('.images');


// Create array with images
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Created image active variable
let activeImage = '';

// *PHASE 2
// Prepare html injection string
for (let i = 0; i < sources.length; i++) {
    activeImage += `<img src="${sources[i]}" alt="">`;
}


// Add HTML elements in DOM
imgBox.innerHTML = activeImage;

const images = document.querySelectorAll('img');

// Create index variable
let index = 0;

// console.log(images);
images[index].classList.add('active');


// Button forward click
forward.addEventListener('click', function () {
    images[index].classList.remove('active');
    index++;

    // Infinite forward click
    if (index === images.length) {
        index = 0;
    }

    // Add class active in next card
    images[index].classList.add('active');
})


// Button backward click
backward.addEventListener('click', function () {

    // Remove active class
    images[index].classList.remove('active');

    // Infinite backward click
    if (index === 0) {
        index = images.length;
    }
    index--;

    // Add class active in previous card
    images[index].classList.add('active');
})






