const search = () => {
  const searchBtn = document.querySelector('.search');
  const searchPage = document.querySelector('.search-page');
  const searchClose = document.querySelector('.search-page__close');
  const body = document.querySelector('body');
  searchBtn.addEventListener('click', (e) => {
    searchPage.classList.add('active');
    body.classList.add('active');
  });
  searchClose.addEventListener('click', (e) => {
    searchPage.classList.remove('active');
    body.classList.remove('active');
  });
};
export default search;
