const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formData);

function formData(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  if (email === '' || password === '') {
    return alert('Всі поля повинні бути заповнені!');
  }
  const formUser = {
    email,
    password,
  };
  console.log(formUser);
  formEl.reset();
}
