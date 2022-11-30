document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    position: 'bottom',
    shouldSort: false,
    allowHTML: true,
    classNames: {
      containerOuter: 'choices header_choices',
     },
  });

});
