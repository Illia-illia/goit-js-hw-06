const inputValueEl = document.querySelector('#validation-input');

inputValueEl.addEventListener('blur', inputCheckLength);

function inputCheckLength() {
  const LENGTH = inputValueEl.dataset.length;
  let inputLength = inputValueEl.value.length.toString();

  if (LENGTH === inputLength) {
    return inputValueEl.classList.replace('invalid', 'valid');
  }

  inputValueEl.classList.add('invalid');
  inputValueEl.classList.remove('valid');
}
