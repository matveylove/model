const btnModel = document.querySelector('.all__models');
const main__hide = document.querySelector('.main__hide');
const all__list = document.querySelector('.all__list');
const all = document.querySelector('.all');
const all__back = document.querySelector('.all__back');

all__back.addEventListener('click', function () {
    main__hide.style.display = 'block';
    all.style.display = 'none';

    window.scrollTo({ top: 0, behavior: 'smooth' });
})

btnModel.addEventListener('click', function () {
    main__hide.style.display = 'none';
    all.style.display = 'block';

    window.scrollTo({ top: 0, behavior: 'smooth' });
})

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
        const all__btn = document.querySelectorAll('.all__btn');

        all__btn.forEach(function (btn) {
            btn.addEventListener('click', function () {
                let modelName = btn.parentElement.firstElementChild.firstElementChild.textContent.trim();

                res.forEach(function (item) {
                    if (item.name === modelName) {
                        console.log(item);
                    }
                })


            });
        })
    })