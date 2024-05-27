import { PATTERNS } from '../../../config.js';

import View from '../../View.js';

class ConfigurationView extends View {
  _parentElement =
    document.querySelector('.parameters__configuration');

  _generateMarkup() {
    return (
      `
        <div class="wrapper-block wrapper-configuration">
          <h2 class="configuration__heading">
            Конфигурации
          </h2>

          <div class="configuration__configs">
            ${Object.entries(PATTERNS).map(function(pattern) {
              return (
                `
                  <div class="config" id="${pattern.at(0)}">
                    <img
                      class="config__img"
                      src="../../../../../public/${pattern.at(0)}.png"
                      alt="${pattern.at(0)}"
                    />

                    <span class="config__name">
                      ${pattern.at(1).name}
                    </span>
                  </div>
                `
              );
            }).join('')}
          </div>

          <button class="configuration__random btn">
            Случайная конфигурация
          </button>
        </div>
      `
    );
  }

  subscribeHandlerChangeConfiguration(handler) {
    this._parentElement.addEventListener('click', function(event) {
      const targetConfig = event.target.closest('.config');
      const targetRandom = event.target.closest('.configuration__random');
      const target = targetConfig || targetRandom;

      if (!target) return;

      if (target.classList.contains('config')) {
        handler('setPattern', target.id);

        return;
      }

      handler('setRandom');
    });
  }
}

export default new ConfigurationView();
