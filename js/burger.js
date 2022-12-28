document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".burger-nav").classList.add("active");
})
document.querySelector(".burger-nav__close-btn").addEventListener("click", function() {
  document.querySelector(".burger-nav").classList.remove("active");
})
