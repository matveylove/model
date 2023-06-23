let arrowr = document.querySelector('.face__arrowr');
let arrowl = document.querySelector('.face__arrowl');
let start = document.querySelector('.face__start');
let end = document.querySelector('.face__end');
let faceImg = document.querySelector('.face__img');
let list = document.querySelector('.face__list');

let count = 0;

fetch('../json/newModel.json')
    .then(res => res.json())
    .then(function (res) {

        start.innerHTML = count + 1;
        end.innerHTML = res.length;

        showModelName(res[count])

        arrowr.addEventListener('click', function () {
            if (count != 4) {
                count++
                start.innerHTML = count + 1;
            }
            else if (count === 4) {
                count = 0
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

function showModelName(item) {
    const face__name = document.querySelector('.face__name');
    const face__info = document.querySelector('.face__info');

    face__name.innerHTML = item.name;
    face__info.innerHTML = item.description;
}

function getListItem(item) {
    showModelName(item)
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