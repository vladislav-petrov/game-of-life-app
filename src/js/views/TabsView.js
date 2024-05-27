import View from './View.js';

class TabsView extends View {
  _parentElement = document.querySelector('.section-tabs');

  constructor() {
    super();

    this._parentElement
      .addEventListener('click', this.#toggleTab.bind(this));
  }

  _generateMarkup() {
    return (
      `
        <button class="tab-rules tab">
          <img
            class="tab__icon icon-arrow-right"
            src="./public/arrow-right.svg"
            alt="icon-arrow-right"
          />

          <img
            class="tab__icon icon-arrow-down hidden"
            src="./public/arrow-down.svg"
            alt="icon-arrow-down"
          />

          <span class="tab__text">Правила</span>
        </button>

        <button class="tab-parameters tab">
          <img
            class="tab__icon icon-arrow-right"
            src="./public/arrow-right.svg"
            alt="icon-arrow-right"
          />

          <img
            class="tab__icon icon-arrow-down hidden"
            src="./public/arrow-down.svg"
            alt="icon-arrow-down"
          />

          <span class="tab__text">Параметры</span>
        </button>
      `
    );
  }

  #toggleTab(event) {
    const tabs = Array.from(this._parentElement.querySelectorAll('.tab'));
    const target = event.target.closest('.tab');

    if (!target?.classList.contains('tab')) return;

    tabs.forEach((tab) => {
      const tabIconArrowRight = tab.querySelector('.icon-arrow-right');
      const tabIconArrowDown = tab.querySelector('.icon-arrow-down');

      const tabContentClass =
        `section-${Array.from(tab.classList).at(0).split('-').at(1)}`;

      const tabContentElement = document.querySelector(`.${tabContentClass}`);

      if (tab !== target) {
        tab.classList.remove('tab_selected');

        tabIconArrowRight.classList.remove('hidden');
        tabIconArrowDown.classList.add('hidden');
        tabContentElement.classList.add('hidden');
      }

      if (tab === target) {
        tab.classList.toggle('tab_selected');

        tabIconArrowRight.classList.toggle('hidden');
        tabIconArrowDown.classList.toggle('hidden');
        tabContentElement.classList.toggle('hidden');
      }
    });
  }
}

export default new TabsView();
