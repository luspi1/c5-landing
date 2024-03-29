import { Swiper } from 'swiper/bundle'

// Инициализация слайдера

export const swiperBlock = new Swiper('.swiper-block', {
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  slidesPerView: 1,
})

export const multipleSwiper = new Swiper('.multiple-swiper', {
  navigation: {
    nextEl: '.multiple-slider-button-next',
    prevEl: '.multiple-slider-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 5,

  loop: true,
  allowSlidePrev: true,
  allowSlideNext: true,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    1330: {
      slidesPerView: 5,
      spaceBetween: 27,
    },
  },
})
