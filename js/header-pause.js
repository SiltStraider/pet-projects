let btnSvg = document.querySelectorAll('.header-bottom__button_svg');

btnSvg.forEach(svg => {
  svg.addEventListener('click', function() {
      svg.classList.toggle('header-bottom__button_svg');
      svg.classList.toggle('header-bottom__button_svg-pause');
    })
})
