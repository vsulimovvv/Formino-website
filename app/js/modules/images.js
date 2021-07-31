const images = () => {
  const imgPopup = document.createElement('div');
  const section = document.querySelector('.gallery-content__slider');
  const bigImg = document.createElement('div');

  imgPopup.classList.add('popup');
  bigImg.classList.add('full-page-image');
  section.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImg);

  section.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.closest('.gallery-content__extand')) {
      imgPopup.style.display = 'flex';

      const path = target.parentElement.parentElement.style.backgroundImage;
      console.log(path);
      bigImg.style.backgroundImage = path;
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  });
};

export default images;
