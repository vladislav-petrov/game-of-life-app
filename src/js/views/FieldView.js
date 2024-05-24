import View from './View.js';

class FieldView extends View {
  _parentElement = document.querySelector('.field');

  _generateMarkup() {
    const { x, y } = this._data.axes;
    const { cells } = this._data;

    return (
      `
        <table>
          ${Array.from({ length: y }).map(function(_, i) {
            return (
              `
                <tr>
                  ${Array.from({ length: x }).map(function(_, j) {
                    const key = `${i + 1}_${j + 1}`;

                    return (
                      `
                        <td id="${key}">${cells[key]}</td>
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
