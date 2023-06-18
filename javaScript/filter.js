const ageBtn = document.querySelector('.all__age');
const heightBtn = document.querySelector('.all__height');
const sizeBtn = document.querySelector('.all__size');
const filterBtn = document.querySelector('.all__filterBtn');
const filterBox = document.querySelector('.all__filterBox');
//  Инпуты


filterBtn.addEventListener('click', function () {
    filterBox.classList.toggle('show')
})

heightBtn.addEventListener('click', function () {
    heightFlag = true;
    sizeFlag = false;
    ageFlag = false;

    filterBox.classList.remove('show')
    fetch('../json/array.json')
        .then(res => res.json())
        .then(res => {
            let newArray = res.sort(function (a, b) {
                return a.height - b.height
            })
            all__list.innerHTML = '';
            newArray.forEach(function (item) {
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
            getPortfolio(res)
        })
})

sizeBtn.addEventListener('click', function () {
    heightFlag = false;
    sizeFlag = true;
    ageFlag = false;

    filterBox.classList.remove('show')
    fetch('../json/array.json')
        .then(res => res.json())
        .then(res => {
            let newArray = res.sort(function (a, b) {
                return a.footSize - b.footSize
            })
            all__list.innerHTML = '';
            newArray.forEach(function (item) {
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
            getPortfolio(res)
        })
})

ageBtn.addEventListener('click', function () {
    heightFlag = false;
    sizeFlag = false;
    ageFlag = true;
    filterBox.classList.remove('show')
    fetch('../json/array.json')
        .then(res => res.json())
        .then(res => {
            let newArray = res.sort(function (a, b) {
                return a.age - b.age
            })
            all__list.innerHTML = '';
            newArray.forEach(function (item) {
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
            getPortfolio(res)
        })
})

