"use strict";

$(document).ready(function () {
  var serviceSlider = new Swiper(".service__swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true
      } // 1280: {
      //   slidesPerView: 4,
      // },

    },
    navigation: {
      nextEl: ".service__next",
      prevEl: ".service__prev"
    }
  });
}); // Your functions here