import {
  X_AXIS,
  Y_AXIS,
  GLIDER_PATTERN,
  NEIGHBOUR_OFFSETS
} from './config.js';

import {
  getNewCoord,
  getAliveNeighbours,
  getNewCellValue
} from './helpers.js';

const state = {
  field: {
    axes: {
      x: X_AXIS,
      y: Y_AXIS
    },
    cells: {
      curCells: {},
      nextCells: {}
    }
  },
  generationCount: 0
};

const updateFieldSize = function(x, y) {
  state.field.axes.x = x;
  state.field.axes.y = y;
}

const generateField = function({ x, y }) {
  updateFieldSize(+x, +y);

  for (let i = 1; i <= +y; i++) {
    for (let j = 1; j <= +x; j++) {
      state.field.cells.curCells[`${i}_${j}`] = 0;
    }
  }
}

const applyPattern = function(pattern) {
  switch (pattern) {
    case 'block': {
      break;
    }
    case 'blinker': {
      break;
    }
    case 'glider': {
      Object.entries(GLIDER_PATTERN).forEach(function([key, value]) {
        state.field.cells.curCells[key] = value;
      });

      break;
    }
    default: {
      
    }
  }
}

const calcFirstGen = function(pattern) {
  applyPattern(pattern);

  state.generationCount++;
}

const calcNextGen = function() {
  Object.entries(state.field.cells.curCells).forEach(function([key, value]) {
    state.field.cells.nextCells[key] = updateCellValue(key, value);
  });

  state.field.cells.curCells = state.field.cells.nextCells;
  state.field.cells.nextCells = {};
  state.generationCount++;
}

const getNeighbours = function(x, y) {
  const neighbours = {};

  NEIGHBOUR_OFFSETS.forEach(function(offset) {
    const { x: maxX, y: maxY } = state.field.axes;

    const neighbourX = getNewCoord(x + offset.x, maxX);
    const neighbourY = getNewCoord(y + offset.y, maxY);

    const neighbourKey = `${neighbourY}_${neighbourX}`;
    const neighbourValue = state.field.cells.curCells[neighbourKey];

    neighbours[neighbourKey] = neighbourValue;
  });

  return neighbours;
}

const updateCellValue = function(key, value) {
  const [y, x] = key.split('_');

  const neighbours = getNeighbours(+x, +y);
  const aliveNeighbours = getAliveNeighbours(neighbours);

  return getNewCellValue(value, aliveNeighbours);
}

export {
  state,
  generateField,
  calcFirstGen,
  calcNextGen
};
