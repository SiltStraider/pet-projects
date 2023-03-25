let form = document.querySelector('.about-us-form');
let textArea = document.querySelector('.about-us-form__textarea');
let inputName = document.querySelector('.about-us-form__input-name');
let inputEmail = document.querySelector('.about-us-form__input-email');
let formBtn = document.querySelector('.about-us-form__btn');
let formCbx = document.querySelector('.about-us-form__checkbox');

textArea.addEventListener('input', function () {
  textArea.style.borderColor = "inherit";
})

inputName.addEventListener('input', function () {
  inputName.style.borderColor = "inherit";
})

inputEmail.addEventListener('input', function () {
  inputEmail.style.borderColor = "inherit";
})

form.addEventListener('submit', function (e) {

  e.preventDefault();

  if (!textArea.value) {
    textArea.style.borderColor = "red";
  }

  if (!inputName.value) {
    inputName.style.borderColor = "red";
  }

  if (!inputEmail.value) {
    inputEmail.style.borderColor = "red";
  }

  if (!formCbx.checked) {
    document.querySelector('.about-us-form__checkbox_txt').style.borderBottom = "1px solid red";
  } else {
    document.querySelector('.about-us-form__checkbox_txt').style.borderBottom = "none"
  }

  if (!textArea.value || !inputName.value || !inputEmail.value || !formCbx.checked) {
    alert('Заполните, пожалуйста все поля формы и дайте своё согласие на обработку персональных данных');
    return
  }
})

