import View from './View.js';

class CanvasView extends View {
  _parentElement = document.querySelector('.field');

  _generateMarkup() {
    return (
      `<canvas id="field" width="200" height="200"></canvas>`
    );
  }
}

export default new CanvasView();
