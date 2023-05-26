let burgerBtn = document.querySelector('.burger');
let burgerBox = document.querySelector('.burger__box');
let burgerClose = document.querySelector('.burger__close');

burgerBtn.addEventListener('click', function () {
    burgerBox.style.display = 'flex';
})

burgerClose.addEventListener('click', function () {
    burgerBox.style.display = 'none';
})
