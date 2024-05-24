import { X_AXIS, Y_AXIS, GLIDER_PATTERN, NEIGHBOUR_OFFSETS } from './config.js';

import { calcNewCoord } from './helpers.js';

const state = {
  field: {
    axes: {
      x: X_AXIS,
      y: Y_AXIS
    },
    cells: {
      currentGen: {},
      nextGen: {}
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
      state.field.cells.currentGen[`${i}_${j}`] = 0;
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
        state.field.cells.currentGen[key] = value;
      });

      break;
    }
    default: {
      
    }
  }
}

const calcFirstGeneration = function(pattern) {
  applyPattern(pattern);

  state.generationCount++;
}

const calcNextGen = function() {
  Object.entries(state.field.cells.currentGen).forEach(function([key, value]) {
    state.field.cells.nextGen[key] = updateCell(key, value);
  });

  state.field.cells.currentGen = state.field.cells.nextGen;
  state.field.cells.nextGen = {};
  state.generationCount++;
}

const getAliveNeighbours = function(y, x) {
  return NEIGHBOUR_OFFSETS.reduce(function(acc, offset) {
    const { y: maxY, x: maxX } = state.field.axes;

    const neighbourY = calcNewCoord(y + offset.y, maxY);
    const neighbourX = calcNewCoord(x + offset.x, maxX);
    const neighbour = state.field.cells.currentGen[`${neighbourY}_${neighbourX}`];

    return acc + neighbour;
  }, 0);
}

const updateCell = function(key, value) {
  const [y, x] = key.split('_');
  const aliveNeighbours = getAliveNeighbours(+y, +x);

  // Клетка жива и имеет 2 или 3 живых соседа
  if (value && [2, 3].includes(aliveNeighbours)) return 1;
  // Клетка мертва и имеет 3 живых соседа
  if (!value && aliveNeighbours === 3) return 1;

  return 0;
}

export { state, generateField, calcFirstGeneration, calcNextGen };
