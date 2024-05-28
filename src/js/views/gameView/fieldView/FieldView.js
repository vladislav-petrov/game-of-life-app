import { FIELD_SIZE, CELL_SIZE } from '../../../config.js';

import View from '../../View.js';

class FieldView extends View {
  _parentElement = document.querySelector('.game__field');

  _generateMarkup() {
    const dimension = this._data;
    const fieldSize = dimension > 100 ? CELL_SIZE * dimension : FIELD_SIZE;

    return (
      `
        <canvas id="field" width="${fieldSize}" height="${fieldSize}"></canvas>
      `
    );
  }
}

export default new FieldView();
