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

  slidesPerView: 5,
  // freeMode: true,
  // loop: true,
  allowSlidePrev: true,
  allowSlideNext: true,
})
