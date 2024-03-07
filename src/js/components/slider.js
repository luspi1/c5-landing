import { Swiper } from 'swiper/bundle'

// Инициализация слайдера

export const swiperBlock = new Swiper('.swiper-block', {
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  slidesPerView: 1,

  //   autoplay: {
  //     delay: 3000,
  //   },
})

export const multipleSwiper = new Swiper('.multiple-swiper', {
  navigation: {
    nextEl: '.multiple-slider-button-next',
    prevEl: '.multiple-slider-button-prev',
  },

  // slidesPerView: 5,

  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 5,
    },

    460: {
      slidesPerView: 2,
      spaceBetween: 5,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 5,
    },

    1000: {
      slidesPerView: 4,
      spaceBetween: 5,
    },

    1310: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },

  spaceBetween: 27,

  loop: true,
  allowSlidePrev: true,
  allowSlideNext: true,
})
