let btnView = document.querySelector('.view-more__btn');
let hideContent = document.querySelector('.view-more-display-none');

btnView.addEventListener('click', function () {
  hideContent.classList.toggle('view-more');
  hideContent.classList.toggle('view-more-display-none');

  if (btnView.textContent === 'Ещё подкасты') {
    btnView.textContent = 'Меньше подкастов';
  } else if (btnView.textContent === 'Меньше подкастов') {
    btnView.textContent = 'Ещё подкасты'
  }
})
