import Swiper from 'swiper/bundle';

export default () => {
  const root = document.documentElement;
  const box = document.querySelector('.references__slider-box');

  const calculateOffset = () => {
    if(box) {
      const marginOffset = root.clientWidth - box.getBoundingClientRect().right;
      root.style.setProperty('--marginOffset', `${marginOffset}px`);
    }
  };

  calculateOffset();
  window.addEventListener('resize', calculateOffset);

  const sliderConfig = {
    slidesPerView: 1,
    spaceBetween: 62,
    grabCursor: true,
    breakpoints: {
      480: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.5,
      },
    },
  };

  const sanitarySlider = new Swiper(document.querySelector('[data-sanitary]'), {
    ...sliderConfig,
    navigation: {
      prevEl: '[data-sanitary="prev"]',
      nextEl: '[data-sanitary="next"]',
      disabledClass: 'references__controls-disabled',
    },
  });

  const heatingSlider = new Swiper(document.querySelector('[data-heating]'), {
    ...sliderConfig,
    navigation: {
      prevEl: '[data-heating="prev"]',
      nextEl: '[data-heating="next"]',
      disabledClass: 'references__controls-disabled',
    },
  });

  const solarSlider = new Swiper(document.querySelector('[data-solar]'), {
    ...sliderConfig,
    navigation: {
      prevEl: '[data-solar="prev"]',
      nextEl: '[data-solar="next"]',
      disabledClass: 'references__controls-disabled',
    },
  });
};
