const all__all = document.querySelector('.all__all');
const all__mail = document.querySelector('.all__mail');
const all__fmail = document.querySelector('.all__fmail');

all__all.addEventListener('click', function () {
    all__list.innerHTML = '';
    fetch('../json/array.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(function (item) {
                showInfo(item)
            })
            getPortfolio(res)
        })
});

all__mail.addEventListener('click', function () {
    all__list.innerHTML = '';

    fetch('../json/array.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(function (item) {
                if (item.gender === 'Мужской') {
                    showInfo(item)
                }
            })
            getPortfolio(res)
        })
});

all__fmail.addEventListener('click', function () {
    all__list.innerHTML = '';

    fetch('../json/array.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(function (item) {
                if (item.gender === 'Женский') {
                    showInfo(item)
                }
            })
            getPortfolio(res)
        })
});

function showInfo(item) {
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
}