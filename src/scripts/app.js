// Utils
import documentReady from './utils/DOMLoaded.js';

// DOM manipulation
import burger from './DOM/burger.js';
import slider from './DOM/slider.js';
import runningNums from './DOM/runningNums.js';
import Aos from 'aos';

// DOM elements
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu');
const menuItemsEl = document.querySelectorAll('[data-menu-item]');
const achievements = document.querySelector('.achievements');

export const elements = {
  burgerEl,
  menuEl,
  menuItemsEl,
};

documentReady(() => {
  // Тут исполняем скрипты
  Aos.init({
    once: true,
    duration: 1200,
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runningNums();
          observer.unobserve(entry.target)
        }
      });
    },
    { threshold: 0.1 }
  );

  if(achievements !== null) observer.observe(achievements);
  burger();
  slider();
});
