import * as model from './model.js';

import tabsView from './views/tabsView/TabsView.js';
import dimensionView from './views/parametersView/dimensionView/dimensionView.js';
import configurationView from './views/parametersView/configurationView/ConfigurationView.js';

const handleChangeDimension = function(dimension) {
  model.setFieldDimension(dimension);
}

const handleChangeConfiguration = function(action, pattern = null) {
  model.setFirstGenAliveCells(action, pattern);
}











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
  configurationView.render();

  dimensionView.subscribeHandlerChangeDimension(handleChangeDimension);
  configurationView.subscribeHandlerChangeConfiguration(handleChangeConfiguration);







  // inputView.subscribeHandlerStart(controlInput);

  // field.subscribeHandlerManualDraw(handleCellClick);

  // field.drawField();

  // model.setFirstGenAliveCells('setPattern', 'boat');
  // field.drawCells(model.state.field.aliveCells);

  // setInterval(function() {
  //   model.setNextGenAliveCells();

  //   field.reset();
  //   field.drawCells(model.state.field.aliveCells);
  // }, 500);
}

init();
