import * as model from './model.js';

import canvasView from './views/CanvasView.js';
import Field from './field/Field.js';

const controlInput = function(data) {}

const init = function() {
  // inputView.subscribeHandlerStart(controlInput);

  canvasView.render();

  const field = new Field(20, 20);

  field.drawField();

  model.setFieldDimensions(20);
  model.setFirstGenAliveCells('setPattern', 'glider');
  field.drawCells(model.state.field.aliveCells);

  // setInterval(function() {
  //   model.setNextGenAliveCells();
  //   field.drawCells(model.state.field.aliveCells);
  // }, 500);

}

init();
