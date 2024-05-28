import { MSG_APPEARANCE_TIME } from '../../../config.js';

import View from '../../View.js';

class GameOverTextView extends View {
  _parentElement = document.querySelector('.game__game-over-text');

  _generateMarkup() {
    return (
      `
        <span>Игра окончена</span>
      `
    );
  }

  show() {
    this._parentElement.classList.remove('hidden');

    setTimeout(() => {
      this._parentElement.classList.add('hidden');
    }, MSG_APPEARANCE_TIME);
  }
}

export default new GameOverTextView();
