let btn = document.querySelector('.search');
let searchForm = document.querySelector(".search-form");

btn.addEventListener('click', function(){
  searchForm.classList.toggle('search-form__active');
})
