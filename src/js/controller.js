import * as model from './model.js';

import tabsView from './views/tabsView/TabsView.js';
import dimensionView from './views/parametersView/dimensionView/dimensionView.js';
import configurationView from './views/parametersView/configurationView/ConfigurationView.js';
import sidebarView from './views/gameView/sidebarView/SidebarView.js';
import fieldView from './views/gameView/fieldView/FieldView.js';

import Field from './field/Field.js';

let field;

const handleChangeDimension = function(dimension) {
  model.setFieldDimension(dimension);

  dimensionView.render(model.state.field.dimension);

  field.reset();
  field.drawField(model.state.field.dimension);
}

const handleChangeConfiguration = function(action, pattern = null) {
  model.setFirstGenAliveCells(action, pattern);

  field.reset();
  field.drawField(model.state.field.dimension);
  field.drawCells(model.state.field.aliveCells);
}

const handleAddCell = function(cell) {
  model.addCell(cell);

  field.drawCell(cell);
}

const init = function() {
  tabsView.render();
  dimensionView.render(model.state.field.dimension);
  configurationView.render();
  sidebarView.render(model.state.characteristics);
  fieldView.render();

  dimensionView.subscribeHandlerChangeDimension(handleChangeDimension);
  configurationView.subscribeHandlerChangeConfiguration(handleChangeConfiguration);

  field = new Field();

  field.drawField(model.state.field.dimension);

  field.subscribeHandlerManualDraw(handleAddCell);












  // setInterval(function() {
  //   model.setNextGenAliveCells();

  //   field.reset();
  //   field.drawCells(model.state.field.aliveCells);
  // }, 500);
}

init();
