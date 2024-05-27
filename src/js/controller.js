import * as model from './model.js';

import tabsView from './views/tabsView/TabsView.js';
import dimensionView from './views/dimensionView/dimensionView.js';






import canvasView from './views/CanvasView.js';
import Field from './field/Field.js';

// canvasView.render();
// const field = new Field(20);

const controlInput = function(data) {}

const handleCellClick = function(cell) {
  field.drawCell(cell);
}

const init = function() {
  tabsView.render();
  dimensionView.render(model.state.field.dimension);



  // inputView.subscribeHandlerStart(controlInput);

  // field.subscribeHandlerManualDraw(handleCellClick);

  // field.drawField();

  // model.setFirstGenAliveCells('setPattern', 'glider');
  // field.drawCells(model.state.field.aliveCells);

  // setInterval(function() {
  //   model.setNextGenAliveCells();

  //   field.reset();
  //   field.drawCells(model.state.field.aliveCells);
  // }, 500);
}

init();
