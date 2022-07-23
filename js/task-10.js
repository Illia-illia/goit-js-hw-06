const amountEl = document.querySelector('#controls');
amountEl.addEventListener('input', event => {
  console.log(event.currentTarget.value);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
