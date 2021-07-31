const toggleMenu = () => {
  const menuEl = document.querySelector('.nav');
  const btnEl = document.querySelector('.header__toggle');
  const parentEl = document.querySelector('.header');
  const navEl = document.querySelector('nav');
  const overlow = document.querySelector('.overflow');
  const body = document.querySelector('body');

  parentEl.addEventListener('click', (e) => {
    if (e.target.closest('.header__toggle')) {
      menuEl.classList.toggle('active');
      btnEl.classList.toggle('active');
      overlow.classList.toggle('active');
      body.classList.toggle('active');
    }
  });
  navEl.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.closest('.nav__link')) {
      menuEl.classList.toggle('active');
      btnEl.classList.toggle('active');
      overlow.classList.toggle('active');
      body.classList.toggle('active');
    }
  });
  overlow.addEventListener('click', (e) => {
    menuEl.classList.remove('active');
    btnEl.classList.remove('active');
    overlow.classList.remove('active');
    body.classList.toggle('active');
  });
};
// toggleMenu();
export default toggleMenu;
