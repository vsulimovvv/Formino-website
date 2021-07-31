const slides = () => {
  const slider1 = new Swiper('.about-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.about-slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1023: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        centeredSlides: false,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      420: { centeredSlides: false, slidesPerView: 1.5, spaceBetween: 20 },
      320: {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
  const slider2 = new Swiper('.gallery-slider', {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 5,
    loop: true,
    pagination: {
      el: '.gallery-slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      820: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 5,
      },
    },
  });
  const slider3 = new Swiper('.slider-testimonial', {
    slidesPerView: 1,
    loop: true,
    speed: 500,
    navigation: {
      nextEl: '.slider-testimonial .swiper-button-next',
      prevEl: '.slider-testimonial .swiper-button-prev',
    },
  });
  const slider4 = new Swiper('.blog-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.blog-slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      650: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      991: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });
  const slider6 = new Swiper('.slider-gallery', {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 5,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.slider-gallery .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      450: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      700: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      950: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1400: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  });
  const slider7 = new Swiper('.post-slider', {
    loop: true,
    slidesPerView: 'auto', 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });  
};

export default slides;
