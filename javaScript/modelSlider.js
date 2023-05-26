let arrowr = document.querySelector('.face__arrowr');
let arrowl = document.querySelector('.face__arrowl');
let start = document.querySelector('.face__start');
let end = document.querySelector('.face__end');
let faceImg = document.querySelector('.face__img');
let list = document.querySelector('.face__list');

console.log(faceImg);
let count = 0;


fetch('../json/array.json')
    .then(res => res.json())
    .then(function (res) {

        start.innerHTML = count + 1;
        end.innerHTML = res.length;

        arrowr.addEventListener('click', function () {
            if (count != 30) {
                count++
                start.innerHTML = count + 1;
            }
            faceImg.innerHTML = '';
            list.innerHTML = '';
            res.forEach((item, index) => {
                if (index === count) {
                    getListItem(item)
                }
            });

        })

        arrowl.addEventListener('click', function () {
            if (count != 0) {
                count--
                start.innerHTML = count + 1;
            }

            faceImg.innerHTML = '';
            list.innerHTML = '';
            res.forEach((item, index) => {
                if (index === count) {
                    getListItem(item)
                }
            });
        })

        res.forEach((item, index) => {
            if (index === count) {
                faceImg.insertAdjacentHTML('afterbegin', `
                    <img src="${item.imageUrl}" alt="">
                `)
            }
        });
    })

function getListItem(item) {
    faceImg.insertAdjacentHTML('afterbegin', `
        <img src="${item.imageUrl}" alt="">
    `)
    list.insertAdjacentHTML('afterbegin', `
    <li class="face__item">
        <div class="face__line"></div>
        <div class="face__desc">
            <h4>Возраст</h4>
            <span>${item.age}</span>
        </div>
     </li>
    <li class="face__item">
        <div class="face__line"></div>
        <div class="face__desc">
            <h4>Рост</h4>
            <span>${item.height}</span>
        </div>
    </li>
    <li class="face__item">
        <div class="face__line"></div>
        <div class="face__desc">
            <h4>Обувь</h4>
            <span>${item.footSize}</span>
        </div>
    </li>
    <li class="face__item">
        <div class="face__line"></div>
        <div class="face__desc">
            <h4>Глаза</h4>
            <span>${item.eyesColor}</span>
        </div>
    </li>
    <li class="face__item">
        <div class="face__line"></div>
        <div class="face__desc">
            <h4>Волосы</h4>
            <span>${item.hairColor}</span>
        </div>
    </li>
    <li class="face__item">
        <div class="face__line"></div>
        <div class="face__desc">
            <h4>Бюст</h4>
            <span>${item.breast}</span>
        </div>
    </li>
    <li class="face__item">
        <div class="face__line"></div>
        <div class="face__desc">
            <h4>Талия</h4>
            <span>${item.torso}</span>
        </div>
    </li>
    <li class="face__item">
        <div class="face__line"></div>
        <div class="face__desc">
            <h4>Бёдра</h4>
            <span>${item.hips}</span>
        </div>
    </li>
    <li class="face__item">
        <div class="face__line"></div>
        <div class="face__desc">
            <h4>Пол</h4>
            <span>${item.gender}</span>
        </div>
    </li>
`)
}