let counterValue = 0;
const actions = document.querySelectorAll('#counter button');

const counterValueEl = document.querySelector('#value');

actions[0].addEventListener('click', () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});
actions[1].addEventListener('click', () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
