const refs = {
  buttonEl: document.querySelector('.change-color'),
  textEl: document.querySelector('.color'),
  bodyEl: document.querySelector('body'),
};

refs.buttonEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const randColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  refs.textEl.textContent = randColor;
  refs.bodyEl.style.backgroundColor = randColor;
}
