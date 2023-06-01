console.log('JS OK')

// *PHASE 1
// Link to DOM Element
const forward = document.querySelector('.fa-forward');
const backward = document.querySelector('.fa-backward');

// const imgBox = document.querySelector('.images');



// // Create array with images
// const sources = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp'];

// // Created image active variable
// let activeImg = '';


const images = document.querySelectorAll('img');

// Create index variable
let index = 0;

images[index].classList.add('active');


// Button forward click
forward.addEventListener('click', function () {
    images[index].classList.remove('active');
    index++;
    images[index].classList.add('active');
})

// Button backard click
backward.addEventListener('click', function () {
    images[index].classList.remove('active');
    index--;
    images[index].classList.add('active');
})



// // *PHASE 2
// // Prepare html injection string
// for (let i = 0; i < sources.length; i++) {
//     activeImg += `<img src="${sources[i]}">`;
// }


// // Add HTML elements in DOM
// imgBox.innerHTML = activeImg;




