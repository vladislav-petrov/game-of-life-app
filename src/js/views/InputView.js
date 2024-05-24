import View from './View.js';

import { MIN_DIM } from '../config.js';

class InputView extends View {
  _parentElement = document.querySelector('.input');

  _generateMarkup() {
    return (
      `
        <form class="input-form">
          <label for="x">x:</label>
          <input type="number" id="x" name="x" min="${MIN_DIM}" />

          <label for="y">y:</label>
          <input type="number" id="y" name="y" min="${MIN_DIM}" />

          <button>Submit</button>
        </form>
      `
    );
  }

  subscribeHandlerStart(handler) {
    this._parentElement.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      if (!event.target.classList.contains('input-form')) return;

      const data = Object.fromEntries(new FormData(event.target));

      handler(data);
    });
  }
}

export default new InputView();
