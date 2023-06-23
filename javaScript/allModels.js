const btnModel = document.querySelector('.all__models');
const main__hide = document.querySelector('.main__hide');
const all__list = document.querySelector('.all__list');
const all = document.querySelector('.all');
const all__back = document.querySelector('.all__back');
const menu = document.querySelector('.menu');


all__back.addEventListener('click', function () {
    main__hide.style.display = 'block';
    all.style.display = 'none';



    window.scrollTo({ top: 0, behavior: 'smooth' });
})

btnModel.addEventListener('click', function () {
    main__hide.style.display = 'none';
    all.style.display = 'block';
    burgerBtn.style.display = 'block'
    menu.style.display = 'none'

    window.scrollTo({ top: 0, behavior: 'smooth' });
})


// Отображение списка моделей 
fetch('../json/array.json')
    .then(res => res.json())
    .then(res => {
        res.forEach(function (item) {
            all__list.innerHTML += `
                <li class="all__item">
                    <img src="${item.imageUrl}" alt="">
                    <div class="all__info">
                       <div>
                            <h4>${item.name}</h4>
                            <div>
                                <span>Возраст:</span>
                                <span>${item.age}</span>
                            </div>
                            <div>
                                <span>Рост:</span>
                                <span>${item.height}</span>
                            </div>
                            <div>
                                <span>Обхваты:</span>
                                <span>${item.breast}/${item.torso}/${item.hips}</span>
                            </div>
                            <div>
                                <span>Размер ноги:</span>
                                <span>${item.footSize}</span>
                            </div>
                       </div>
                       <button class="all__btn">ПОРТФОЛИО</button>
                    </div>

                </li>
            `
        })

        // Появление портфолио
        getPortfolio(res)
    })

function getPortfolio(res) {
    const all__btn = document.querySelectorAll('.all__btn');
    const all__hide = document.querySelector('.all__hide');
    const porfolio__top = document.querySelector('.porfolio__top');
    const mySwiperWrapper2 = document.querySelector('.mySwiperWrapper2');
    const porfolio = document.querySelector('.porfolio');
    const porfolioClose = document.querySelector('.portfolio__back');



    all__btn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            let modelName = btn.parentElement.firstElementChild.firstElementChild.textContent.trim();
            let modelAge = btn.parentElement.firstElementChild.children[1].textContent.replace(/\s/g, "").replace(/\D/g, "")
            let modelHeight = btn.parentElement.firstElementChild.children[2].textContent.replace(/\s/g, "").replace(/\D/g, "")

            window.scrollTo({ top: 0, behavior: 'smooth' });

            porfolio.classList.add('showAnimation');
            porfolio.classList.remove('hide')

            res.forEach(function (item) {
                if (item.name === modelName && item.age === Number(modelAge) && item.height === Number(modelHeight)) {
                    all__hide.classList.toggle('hide');

                    porfolio__top.innerHTML = `
                    <h2 class="porfolio__title">${item.name}</h2>
                    <ul class="portfolio__list">
                        <li class="face__item face__dop">
                            <div class="face__line"></div>
                            <div class="face__desc face__descnew">
                                <h4>Возраст</h4>
                                <span>${item.age}</span>
                            </div>
                        </li>
                        <li class="face__item face__dop">
                            <div class="face__line"></div>
                            <div class="face__desc face__descnew">
                                <h4>Рост</h4>
                                <span>${item.height}</span>
                            </div>
                        </li>
                        <li class="face__item face__dop">
                            <div class="face__line"></div>
                            <div class="face__desc face__descnew">
                                <h4>Обувь</h4>
                                <span>${item.footSize}</span>
                            </div>
                        </li>
                        <li class="face__item face__dop">
                            <div class="face__line"></div>
                            <div class="face__desc face__descnew">
                                <h4>Глаза</h4>
                                <span>${item.eyesColor}</span>
                            </div>
                        </li>
                        <li class="face__item face__dop">
                            <div class="face__line"></div>
                            <div class="face__desc face__descnew">
                                <h4>Волосы</h4>
                                <span>${item.hairColor}</span>
                            </div>
                        </li>
                        <li class="face__item face__dop">
                            <div class="face__line"></div>
                            <div class="face__desc face__descnew">
                                <h4>Бюст</h4>
                                <span>${item.breast}</span>
                            </div>
                        </li>
                        <li class="face__item face__dop">
                            <div class="face__line"></div>
                            <div class="face__desc face__descnew">
                                <h4>Талия</h4>
                                <span>${item.torso}</span>
                            </div>
                        </li>
                        <li class="face__item face__dop">
                            <div class="face__line"></div>
                            <div class="face__desc face__descnew">
                                <h4>Бёдра</h4>
                                <span>${item.hips}</span>
                            </div>
                        </li>
                        <li class="face__item face__dop">
                            <div class="face__line"></div>
                            <div class="face__desc face__descnew">
                                <h4>Пол</h4>
                                <span>${item.gender}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="face__description">${item.description}</div>
                    `
                    item.imageArray.forEach(function (item) {
                        mySwiperWrapper2.innerHTML += `
                        <div class="swiper-slide">
                            <div>
                                <img src="${item}" alt="">
                            </div>
                        </div>
                        `
                    })
                }
            })


        });
    })

    // Исчезнваение портфолио
    porfolioClose.addEventListener('click', function () {
        all__hide.classList.remove('hide');
        porfolio.classList.add('hide');
        mySwiperWrapper2.innerHTML = '';
    })


}




