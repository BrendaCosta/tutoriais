 // init Swiper:
 const swiper01 = new Swiper(' .mySwiper1', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
}); 
 const swiper02 = new Swiper('.mySwiper2', {
        navigation: {
          nextEl: ".swiper-button-next-s2",
          prevEl: ".swiper-button-prev-s2",
        },
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      }); 

const swiper03 = new Swiper(' .mySwiper3', {
        navigation: {
          nextEl: ".swiper-button-next-s3",
          prevEl: ".swiper-button-prev-s3",
        },
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      }); 
