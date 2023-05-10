const colorModeIcon = document.querySelector('#dark-mode');
const header = document.querySelector('.header');
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.header__navlist');
const headerHeight = header.offsetHeight;

menu.addEventListener('click', () => {
  navlist.classList.toggle('open');
});

colorModeIcon.addEventListener('click', () => {
  if (colorModeIcon.classList.contains('bx-moon')) {
    colorModeIcon.classList.replace('bx-moon', 'bx-sun');
    colorModeIcon.classList.remove('bx-rotate-180', 'bx-tada');
    document.documentElement.classList.add('color');
  } else {
    colorModeIcon.classList.contains('bx-sun');
    colorModeIcon.classList.replace('bx-sun', 'bx-moon');

    document.documentElement.classList.remove('color');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight * 0.5) {
    header.classList.add('scroll-heading');
  } else {
    header.classList.remove('scroll-heading');
  }
});
