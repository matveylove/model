const form = document.querySelector('#form');
const formBtn = document.querySelector('.form__btn');
const formInputs = document.querySelectorAll('.form__input');
const formClose = document.querySelector('.form__close');
const formThanks = document.querySelector('.form__thanks');

formClose.addEventListener('click', function () {
    formThanks.style.display = 'none';
})

form.addEventListener('submit', function (event) {
    // event.preventDefault();
    formInputs.forEach(function (item) {
        setTimeout(function () {
            item.value = '';
        }, 2000)
    })
    formThanks.style.display = 'flex';

    setTimeout(function () {
        formThanks.style.display = 'none';
    }, 2000)
})
