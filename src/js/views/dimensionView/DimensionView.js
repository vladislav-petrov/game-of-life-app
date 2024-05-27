import { MIN_DIMENSION } from '../../config.js';

import View from '../View.js';

class DimensionView extends View {
  _parentElement = document.querySelector('.parameters__dimension');

  _generateMarkup() {
    return (
      `
        <div class="wrapper-block">
          <form class="dimension-form">
            <label class="dimension__label" for="dimension">
              Размерность поля
            </label>

            <input
              class="dimension__input"
              type="number"
              id="dimension"
              name="dimension"
              min="${MIN_DIMENSION}"
              value="${this._data.dimension}"
            />

            <button class="dimension__btn btn">
              Применить
            </button>
          </form>
        </div>
      `
    );
  }
}

export default new DimensionView();
