import View from '../../View.js';

class SidebarView extends View {
  _parentElement = document.querySelector('.game__sidebar');

  _generateMarkup() {
    const { status } = this._data;
    const { aliveCells } = this._data.field;
    const { currentGeneration, generationTime } = this._data.characteristics;

    return (
      `
        <div class="sidebar__characteristics">
          <div class="wrapper-block wrapper-characteristics">
            <div class="characteristic current-generation">
              <span class="characteristic-label">
                Текущее поколение
              </span>

              <span class="characteristic-value">
                ${currentGeneration ?? '-'}
              </span>
            </div>

            <div class="characteristic generation-time">
              <span class="characteristic-label">
                Время генерации нового поколения
              </span>

              <span class="characteristic-value">
                ${generationTime ?? '-'}
              </span>
            </div>
          </div>
        </div>

        <div class="sidebar__btns">
          <button class="sidebar__reset btn ${status === 'active' || aliveCells.length === 0 ? 'disabled' : ''}">
            Очистить поле
          </button>

          <button class="sidebar__start btn ${aliveCells.length ? '' : 'disabled'}">
            ${status === 'idle' ? 'Начать игру' : 'Завершить игру'}
          </button>
        </div>
      `
    );
  }

  subscribeHandlerReset(handler) {
    this._parentElement.addEventListener('click', (event) => {
      if (!event.target.classList.contains('sidebar__reset')) return;

      handler();
    });
  }

  subscribeHandlerStart(handler) {
    this._parentElement.addEventListener('click', (event) => {
      if (!event.target.classList.contains('sidebar__start')) return;

      handler();
    });
  }
}

export default new SidebarView();
