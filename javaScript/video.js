let button = document.querySelector(".title__video-play");
let modal = document.querySelector(".title__modal");
let close = document.querySelector(".title__close");
let video = document.querySelector(".title__modal-video video");

button.addEventListener("click", function () {
  modal.style.display = "flex";
  video.play();
  video.muted = true;
  disableScroll();
});
close.addEventListener("click", function () {
  modal.style.display = "none";
  video.pause();
  enableScroll();
});

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
