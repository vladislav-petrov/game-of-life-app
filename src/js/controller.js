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

  field.reset();
  field.drawField(model.state.field.dimension);

  dimensionView.render(model.state.field.dimension);
}

const handleChangeConfiguration = function(action, pattern = null) {
  model.setFirstGenAliveCells(action, pattern);
}

const init = function() {
  tabsView.render();
  dimensionView.render(model.state.field.dimension);
  configurationView.render();
  sidebarView.render(model.state.characteristics);
  fieldView.render();

  field = new Field();

  field.drawField(model.state.field.dimension);
  field.drawCells(model.state.field.aliveCells);

  dimensionView.subscribeHandlerChangeDimension(handleChangeDimension);
  configurationView.subscribeHandlerChangeConfiguration(handleChangeConfiguration);









  // field.subscribeHandlerManualDraw(handleCellClick);

  // field.drawField();

  // field.drawCells(model.state.field.aliveCells);

  // setInterval(function() {
  //   model.setNextGenAliveCells();

  //   field.reset();
  //   field.drawCells(model.state.field.aliveCells);
  // }, 500);
}

init();
