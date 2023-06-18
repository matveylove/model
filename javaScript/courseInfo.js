const rates__left = document.querySelector('.rates__left img');
const rates__closeIndivid = document.querySelectorAll('.rates__buttonClose')[0];
const rates__lesson = document.querySelectorAll('.rates__box')[0];
const rates__closeLesson = document.querySelectorAll('.rates__buttonClose')[1];
const rates__start = document.querySelectorAll('.rates__box')[1];
const rates__closeStart = document.querySelectorAll('.rates__buttonClose')[2];
const rates__pro = document.querySelectorAll('.rates__box')[2];
const rates__closePro = document.querySelectorAll('.rates__buttonClose')[3];

rates__closeStart.addEventListener('click', function () {
    closeStartInfo()
})

rates__start.addEventListener('click', function () {
    showStartInfo()
})

rates__closeLesson.addEventListener('click', function () {
    closeLessonInfo()
})

rates__lesson.addEventListener('click', function () {
    showLessonInfo()
})

rates__closeIndivid.addEventListener('click', function () {
    closeIndividInfo()
})

rates__left.addEventListener('click', function () {
    showIndividInfo()
})

rates__closePro.addEventListener('click', function () {
    closeProInfo()
})

rates__pro.addEventListener('click', function () {
    showProInfo()
})

function showStartInfo() {
    const rates__start = document.querySelector('.rates__start');
    rates__start.style.display = 'flex';
}

function closeStartInfo() {
    const rates__start = document.querySelector('.rates__start');
    rates__start.style.display = 'none';
}

function showIndividInfo() {
    const rates__individ = document.querySelector('.rates__individ');
    rates__individ.style.display = 'flex';
}

function closeIndividInfo() {
    const rates__individ = document.querySelector('.rates__individ');
    rates__individ.style.display = 'none';
}

function showLessonInfo() {
    const rates__lesson = document.querySelector('.rates__lesson');
    rates__lesson.style.display = 'flex';
}

function closeLessonInfo() {
    const rates__lesson = document.querySelector('.rates__lesson');
    rates__lesson.style.display = 'none';
}

function showProInfo() {
    const rates__pro = document.querySelector('.rates__pro');
    rates__pro.style.display = 'flex';
}

function closeProInfo() {
    const rates__pro = document.querySelector('.rates__pro');
    rates__pro.style.display = 'none';
}