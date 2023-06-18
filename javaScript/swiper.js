new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.swiper-slide'
    },
    slidesPerView: 3,
    watchOverflow: true,
    spaceBetween: 30,
    breakpoints: {
        754: {
            slidesPerView: 3,
        },
        496: {
            slidesPerView: 2,
        },
        280: {
            slidesPerView: 1
        }

    },
})

new Swiper('.mySwiper2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        // clickable: true,
        // dynamicBullets: true
        type: 'progressbar'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.swiper-slide'
    },
    slidesPerView: 1,
    watchOverflow: true,
    spaceBetween: 30,
    breakpoints: {
        754: {
            slidesPerView: 3,
        },
        496: {
            slidesPerView: 2,
        },
        280: {
            slidesPerView: 1
        }
    },
    initialSlide: 1,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    }
})