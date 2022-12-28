class ItcAccordion2 {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: false
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.guests-accordion__top-content');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.guests-accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('guests-accordion__item_show') : null;
        }
      }
      elHeader.parentElement.classList.toggle('guests-accordion__item_show');
    });
  }
}

new ItcAccordion2('#accordion-2');
