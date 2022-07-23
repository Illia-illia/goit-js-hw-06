const refs = {
  RangeEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.RangeEl.addEventListener('input', () => {
  refs.textEl.style.fontSize = `${refs.RangeEl.value}px`;
});
