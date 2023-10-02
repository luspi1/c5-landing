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
