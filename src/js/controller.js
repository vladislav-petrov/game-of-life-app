import * as model from './model.js';

import inputView from './views/InputView.js';
import fieldView from './views/FieldView.js';

const controlInput = function(data) {
  const { x, y } = data;

  model.setFieldDimensions(+x, +y);

  model.setFirstGenAliveCells('setPattern', 'glider');
  fieldView.render(model.state.field);

  setInterval(function() {
    model.setNextGenAliveCells();
    fieldView.render(model.state.field);
  }, 500);
}

const init = function() {
  inputView.subscribeHandlerStart(controlInput);

  inputView.render(model.state.field.dimensions);
}

init();
