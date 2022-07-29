const refs = {
  amountEl: document.querySelector('#controls input'),
  buttonCreateEl: document.querySelector('button[data-create]'),
  buttonDesrtoyEl: document.querySelector('button[data-destroy]'),
  addEl: document.querySelector('#boxes'),
};

refs.amountEl.addEventListener('change', event => {
  let amount = event.currentTarget.value;
  refs.buttonCreateEl.addEventListener('click', () => {
    createBoxes(amount);
    refs.amountEl.value = '';
    amount = '';
  });
});

refs.buttonDesrtoyEl.addEventListener('click', () => {
  refs.addEl.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let size = 20;
function createBoxes(amount) {
  console.log(amount);
  for (let i = 0; i < amount; i++) {
    size += 10;
    const divboxEl = document.createElement('div');
    divboxEl.style.width = `${size}px`;
    divboxEl.style.height = `${size}px`;
    divboxEl.style.backgroundColor = getRandomHexColor();
    refs.addEl.append(divboxEl);
  }
}
