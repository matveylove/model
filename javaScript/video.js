let button = document.querySelector('.title__video-play');
let modal = document.querySelector('.title__modal');
let close = document.querySelector('.title__close');

button.addEventListener('click', function () {
    modal.style.display = 'flex';
});
close.addEventListener('click', function () {
    modal.style.display = 'none';
});

// modal.addEventListener('click', function () {
//     modal.style.display = 'none'
// })