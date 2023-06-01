let button = document.querySelector('.title__video-play');
let modal = document.querySelector('.title__modal');
let close = document.querySelector('.title__close');

button.addEventListener('click', function () {
    modal.style.display = 'flex';
    disableScroll()
});
close.addEventListener('click', function () {
    modal.style.display = 'none';
    enableScroll()
});

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}