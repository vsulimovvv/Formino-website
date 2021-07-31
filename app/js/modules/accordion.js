const accordion = () => {
  const questionsEl = document.querySelector('.questions');
  const questionsItems = document.querySelectorAll('.questions__item');
  const questionsTop = document.querySelectorAll('.questions__top');
  const questionsImg = document.querySelectorAll('.questions__img');

  questionsItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
};

export default accordion;
