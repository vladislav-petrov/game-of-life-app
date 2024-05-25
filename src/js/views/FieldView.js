import View from './View.js';

class FieldView extends View {
  _parentElement = document.querySelector('.field');

  _generateMarkup() {
    const { x, y } = this._data.dimensions;
    const { aliveCells } = this._data;

    return (
      `
        <table>
          ${Array.from({ length: y }).map(function(_, i) {
            return (
              `
                <tr>
                  ${Array.from({ length: x }).map(function(_, j) {
                    const cell = `${i + 1}_${j + 1}`;

                    return (
                      `
                        <td>${aliveCells.includes(cell) ? 1 : 0}</td>
                      `
                    );
                  }).join('')}
                </tr>
              `
            );
          }).join('')}
        </table>
      `
    );
  }
}

export default new FieldView();
