let btnPlay = document.querySelectorAll('.podcasts__button_play-svg');

btnPlay.forEach(svg => {
  svg.addEventListener('click', function() {
      svg.classList.toggle('podcasts__button_play-svg');
      svg.classList.toggle('podcasts__button_play-svg-pause');
    })
})
