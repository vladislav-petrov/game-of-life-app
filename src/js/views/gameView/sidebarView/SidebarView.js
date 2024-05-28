import View from '../../View.js';

class SidebarView extends View {
  _parentElement = document.querySelector('.game__sidebar');

  _generateMarkup() {
    const { currentGeneration, generationTime } = this._data;

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
          <button class="sidebar__reset btn">
            Очистить поле
          </button>

          <button class="sidebar__start btn">
            Начать игру
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

  subscribeHandlerStart() {
    this._parentElement.addEventListener('click', (event) => {
      if (!event.target.classList.contains('sidebar__start')) return;

      handler();
    });
  }
}

export default new SidebarView();
