import { FIELD_SIZE } from '../../../config.js';

import View from '../../View.js';

class FieldView extends View {
  _parentElement = document.querySelector('.game__field');

  _generateMarkup() {
    return (
      `
        <canvas id="field" width="${FIELD_SIZE}" height="${FIELD_SIZE}"></canvas>
      `
    );
  }
}

export default new FieldView();
