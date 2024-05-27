import { PATTERNS } from '../../../config.js';

import View from '../../View.js';

class ConfigurationView extends View {
  _parentElement = document.querySelector('.parameters__configuration');

  _generateMarkup() {
    return (
      `
        <div class="wrapper-block wrapper-configuration">
          <h2 class="configuration__heading">
            Конфигурации
          </h2>

          <div class="configuration__configs">
            
          </div>
        </div>
      `
    );
  }
}

export default new ConfigurationView();
