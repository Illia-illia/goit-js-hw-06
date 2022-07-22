const inputEl = document.querySelector('#name-input');
const nameOutEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  inputEl.value ? (nameOutEl.textContent = inputEl.value) : (nameOutEl.textContent = 'Anonymous');
});
