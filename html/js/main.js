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
  faqAnswer();
  toggleMenu();
  menuToggle();
}); // Your functions here

function faqAnswer() {
  var accordions = document.querySelectorAll('.faq__item');
  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var self = e.currentTarget;
      var control = self.querySelector('.faq__question');
      var content = self.querySelector('.faq__answer');

      if (self.classList.contains('faq__item--open')) {
        accordions.forEach(function (elem) {
          elem.classList.remove('faq__item--open');
          elem.querySelector('.faq__answer').style.maxHeight = null;
        });
      } else {
        accordions.forEach(function (elem) {
          elem.classList.remove('faq__item--open');
          elem.querySelector('.faq__answer').style.maxHeight = null;
        });
        self.classList.add('faq__item--open');
      }

      if (self.classList.contains('faq__item--open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
}

function toggleMenu() {
  $('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.header__manage').addClass('header__manage--active');
    $('body').addClass('no-scroll');
  });
  $('.header__manage-close').on('click', function (e) {
    e.preventDefault();
    $('.header__manage').removeClass('header__manage--active');
    $('body').removeClass('no-scroll');
  });
}

function menuToggle() {
  $('.header__manage-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).parent('.header__manage-item').toggleClass('header__manage-item--active');
  });
}

function sss() {
  var accordions = document.querySelectorAll('.faq__item');
  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var self = e.currentTarget;
      var control = self.querySelector('.faq__question');
      var content = self.querySelector('.faq__answer');

      if (self.classList.contains('faq__item--open')) {
        accordions.forEach(function (elem) {
          elem.classList.remove('faq__item--open');
          elem.querySelector('.faq__answer').style.maxHeight = null;
        });
      } else {
        accordions.forEach(function (elem) {
          elem.classList.remove('faq__item--open');
          elem.querySelector('.faq__answer').style.maxHeight = null;
        });
        self.classList.add('faq__item--open');
      }

      if (self.classList.contains('faq__item--open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
}