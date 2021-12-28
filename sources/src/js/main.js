"use strict";

$(document).ready(function () {
  var serviceSlider = new Swiper(".service__swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
      },
      // 1280: {
      //   slidesPerView: 4,
      // },
    },
    navigation: {
      nextEl: ".service__next",
      prevEl: ".service__prev",
    },
  });

  faqAnswer();
  toggleMenu();
  menuToggle();
  consultPopup();
  closePopup();
});

// Your functions here
function faqAnswer() {
  const accordions = document.querySelectorAll('.faq__item');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.faq__question');
      const content = self.querySelector('.faq__answer');

      if (self.classList.contains('faq__item--open')) {
        accordions.forEach(elem => {
          elem.classList.remove('faq__item--open');
          elem.querySelector('.faq__answer').style.maxHeight = null;
        });
      } else {
        accordions.forEach(elem => {
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
  $('.header__burger').on('click', function(e) {
    e.preventDefault();
    $('.header__manage').addClass('header__manage--active');
    $('body').addClass('no-scroll');
  });

  $('.header__manage-close').on('click', function(e) {
    e.preventDefault();
    $('.header__manage').removeClass('header__manage--active');
    $('body').removeClass('no-scroll');
  });
}

function menuToggle() {
  $('.header__manage-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).parent('.header__manage-item').toggleClass('header__manage-item--active')
  });
}


function sss() {
  const accordions = document.querySelectorAll('.faq__item');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.faq__question');
      const content = self.querySelector('.faq__answer');

      if (self.classList.contains('faq__item--open')) {
        accordions.forEach(elem => {
          elem.classList.remove('faq__item--open');
          elem.querySelector('.faq__answer').style.maxHeight = null;
        });
      } else {
        accordions.forEach(elem => {
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

function consultPopup() {
  $('.person__btn').on('click', function(e) {
    e.preventDefault();
    $('popup').removeClass('popup--active');
    $('.popup-contact').addClass('popup--active');
    $('body').addClass('no-scroll');
  })
}

function closePopup() {
  $('.popup__close').on('click', function(e) {
    e.preventDefault();
    $(this).parent('.popup__inner').parent('.popup').removeClass('popup--active')
    $('body').removeClass('no-scroll');
  })
}