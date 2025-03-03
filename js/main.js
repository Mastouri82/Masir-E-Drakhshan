
import "./header-script.js";
import "./schedule-script.js";
import { showCourseDetails } from './schedule-script.js';

window.showCourseDetails = showCourseDetails; // این خط تابع را در window قرار می‌دهد تا در HTML هم قابل دسترسی باشد

import "./ourTeam-script.js";


// swiper script
const swiper = new Swiper(".swiper", {
  spaceBetween: 300,
  // Enable lazy loading
  lazy: {
    loadPrevNext: true,
  },

  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // Disable navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ------------------------------------------------------------------------------------------
