import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', () => {
  const bodyEl = document.body;
  const popupBtnEl = document.querySelector('.js-hero-btn');
  const closeBtnEl = document.querySelector('.js-popup-close');
  const popupEl = document.querySelector('.popup-wrapper');
  const popupContent = document.querySelector('.popup__form');
  const resetPopup = () => {
    bodyEl.classList.remove('popup-open');
    bodyEl.removeAttribute('style', 'overflow: hidden');
    popupContent.reset();
  };
  popupBtnEl.addEventListener('click', () => {
    bodyEl.classList.add('popup-open');

    if (bodyEl.classList.contains('popup-open')) {
      closeBtnEl.addEventListener('click', () => {
        resetPopup();
      });

      bodyEl.style = 'overflow: hidden';
      document.addEventListener('keydown', (e) => {
        if (e.target === 'Escape' || e.target === 'Esc' || e.keyCode === 27) {
          resetPopup();
        }
      });
      popupEl.addEventListener('click', (e) => {
        if (!e.target.closest('.popup')) {
          resetPopup();
        }
      });
    } else {
      resetPopup();
    }
  });

  const telMask = document.querySelector('.js-tel');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(telMask);
  /* eslint-disable */
  new window.JustValidate('.popup__form', {
    rules: {
      email: {
        required: true,
        email: true,
      },
      textarea: {
        required: true,
        minLength: 3,
      },
      tel: {
        required: true,
        function: () => {
          const phone = telMask.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
    focusWrongField: true,
  });
});

