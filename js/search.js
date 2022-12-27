var btn = document.querySelector('.search');

document.querySelector(".search").addEventListener("click", function() {
  document.querySelector(".search-form").classList.add("search-form__active");
  this.classList.add("active");
})

function showBlock() {
  btn.addEventListener('click', showBlock);
}
