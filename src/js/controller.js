import * as model from './model.js';

import inputView from './views/InputView.js';
import fieldView from './views/FieldView.js';

const controlInput = function(data) {
  model.generateField(data);
  model.calcFirstGen('glider');
  fieldView.render(model.state.field);

  setInterval(function() {
    model.calcNextGen();
    fieldView.render(model.state.field);
  }, 500);
}

const init = function() {
  inputView.subscribeHandlerStart(controlInput);

  inputView.render(model.state.field.axes);
}

init();
