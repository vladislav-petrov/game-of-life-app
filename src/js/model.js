import { X_AXIS, Y_AXIS, GLIDER_PATTERN, NEIGHBOUR_OFFSETS } from './config.js';

import { calcNewCoord } from './helpers.js';

const state = {
  field: {
    axes: {
      x: X_AXIS,
      y: Y_AXIS
    },
    cells: {}
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
      state.field.cells[`${i}_${j}`] = 0;
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
        state.field.cells[key] = value;
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
  const tempCells = {};

  Object.entries(state.field.cells).forEach(function([key, value]) {
    tempCells[key] = updateCell(key, value);
  });

  state.field.cells = tempCells;
  state.generationCount++;
}

const getNeighbours = function(x, y) {
  const neighbours = {};

  NEIGHBOUR_OFFSETS.forEach(function(offset) {
    const { x: maxX, y: maxY } = state.field.axes;

    const neighbourX = calcNewCoord(x + offset.x, maxX);
    const neighbourY = calcNewCoord(y + offset.y, maxY);

    const neighbourKey = `${neighbourY}_${neighbourX}`;
    const neighbourValue = state.field.cells[neighbourKey];

    neighbours[neighbourKey] = neighbourValue;
  });

  return neighbours;
}

const getAliveNeighbours = function(neighbours) {
  return Object
    .values(neighbours)
    .filter((value) => value).length;
}

const updateCell = function(key, value) {
  const [y, x] = key.split('_');

  const neighbours = getNeighbours(+x, +y);
  const aliveNeighbours = getAliveNeighbours(neighbours);

  // Клетка жива и имеет 2 или 3 живых соседа
  if (value && [2, 3].includes(aliveNeighbours)) return 1;
  // Клетка мертва и имеет 3 живых соседа
  if (!value && aliveNeighbours === 3) return 1;

  return 0;
}

export { state, generateField, calcFirstGen, calcNextGen };
