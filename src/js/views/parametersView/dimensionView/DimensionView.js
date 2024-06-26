import { MIN_DIMENSION } from '../../../config.js';

import View from '../../View.js';

class DimensionView extends View {
  _parentElement = document.querySelector('.parameters__dimension');

  _generateMarkup() {
    const { status } = this._data;
    const { dimension } = this._data.field;

    return (
      `
        <div class="wrapper-block">
          <form class="dimension-form">
            <label class="dimension__label" for="dimension">
              Размерность поля
            </label>

            <input
              class="dimension__input ${status === 'idle' ? '' : 'disabled'}"
              type="number"
              id="dimension"
              name="dimension"
              min="${MIN_DIMENSION}"
              value="${dimension}"
            />

            <button
              class="dimension__btn btn ${status === 'idle' ? '' : 'disabled'}"
            >
              Применить
            </button>
          </form>
        </div>
      `
    );
  }

  subscribeHandlerChangeDimension(handler) {
    this._parentElement.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!event.target.classList.contains('dimension-form')) return;

      const data = Object.fromEntries(new FormData(event.target));
      const dimension = +data.dimension;

      if (dimension === this._data.field.dimension) return;

      handler(dimension);
    });
  }
}

export default new DimensionView();
