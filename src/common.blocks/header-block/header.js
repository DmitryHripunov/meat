document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.js-burger-btn');
  const headerContainerEl = document.querySelector('.header');

  burgerBtn.addEventListener('click', () => {
    headerContainerEl.classList.toggle('menu-open');

    if (headerContainerEl.classList.contains('menu-open')) {
      document.body.style = 'overflow: hidden';
      document.addEventListener('keydown', (e) => {
        if (e.target === 'Escape' || e.target === 'Esc' || e.keyCode === 27) {
          document.body.removeAttribute('style', 'overflow: hidden');
          headerContainerEl.classList.remove('menu-open');
        }
      });
    } else {
      document.body.removeAttribute('style', 'overflow: hidden');
    }
  });
});
