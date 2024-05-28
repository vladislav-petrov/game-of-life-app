import * as model from './model.js';

import { NEXT_GEN_TIME } from './config.js';

import tabsView from './views/tabsView/TabsView.js';
import dimensionView from './views/parametersView/dimensionView/dimensionView.js';
import configurationView from './views/parametersView/configurationView/ConfigurationView.js';
import sidebarView from './views/gameView/sidebarView/SidebarView.js';
import fieldView from './views/gameView/fieldView/FieldView.js';

import Field from './field/Field.js';

let field;

const handleChangeDimension = function(dimension) {
  const oldDimension = model.state.field.dimension;
  const newDimension = dimension;

  model.reset();
  model.setFieldDimension(newDimension);

  if (
    (oldDimension <= 100 && newDimension > 100) ||
    (oldDimension > 100 && newDimension <= 100)
  ) {
    fieldView.render(model.state);

    field = new Field();
    field.subscribeHandlerManualDraw(handleAddCell);
  }

  dimensionView.update(model.state);
  sidebarView.update(model.state);

  field.reset();
  field.drawField(model.state.field.dimension);
}

const handleChangeConfiguration = function(action, pattern = null) {
  model.setFirstGenAliveCells(action, pattern);

  sidebarView.update(model.state);

  field.reset();
  field.drawField(model.state.field.dimension);
  field.drawCells(model.state.field.aliveCells);
}

const handleAddCell = function(cell) {
  model.addCell(cell);

  sidebarView.update(model.state);

  field.drawCell(cell);
}

const handleReset = function() {
  model.reset();

  sidebarView.update(model.state);

  field.reset();
  field.drawField(model.state.field.dimension);
}

const tick = function() {
  model.setNextGenAliveCells();

  field.reset();
  field.drawField(model.state.field.dimension);
  field.drawCells(model.state.field.aliveCells);

  sidebarView.update(model.state);

  if (model.state.status === 'active') {
    setTimeout(function() {
      requestAnimationFrame(tick);
    }, NEXT_GEN_TIME);

    return;
  }

  dimensionView.update(model.state);
  configurationView.update(model.state);
}

const handleStart = function() {
  model.changeStatus();

  fieldView.update();
  dimensionView.update(model.state);
  configurationView.update(model.state);

  tick();
}

const init = function() {
  tabsView.render();
  dimensionView.render(model.state);
  configurationView.render(model.state);
  sidebarView.render(model.state);
  fieldView.render(model.state);

  dimensionView.subscribeHandlerChangeDimension(handleChangeDimension);
  configurationView.subscribeHandlerChangeConfiguration(handleChangeConfiguration);
  sidebarView.subscribeHandlerReset(handleReset);
  sidebarView.subscribeHandlerStart(handleStart);

  field = new Field();
  field.drawField(model.state.field.dimension);
  field.subscribeHandlerManualDraw(handleAddCell);
}

init();
