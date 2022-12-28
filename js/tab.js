document.querySelectorAll('.guests-accordion__bottom-content-tabs').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.guests-accordion__bottom-content-tabs').forEach(function (btn) {
      btn.classList.remove('guests-accordion__bottom-content-tabs--active')
    });
    e.currentTarget.classList.add('guests-accordion__bottom-content-tabs--active');
    document.querySelectorAll('.accordion-people-info_blogers').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('accordion-people-info_blogers--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('accordion-people-info_blogers--active');
  });
});
