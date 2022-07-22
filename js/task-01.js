const numberCategoriesEl = document.querySelector('#categories');
console.log('Number of categories:', numberCategoriesEl.children.length);

const categoriesEl = numberCategoriesEl.querySelectorAll('.item');

categoriesEl.forEach(category => {
  console.log('');
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.children.length);
});
