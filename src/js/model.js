import {
  DIMENSION,
  GEN_COEFF,
  NEIGHBOR_OFFSETS,
  PATTERNS
} from './config.js';

import {
  getCellCoords,
  getNewCellCoord,
  checkIsAlive
} from './helpers.js';

const state = {
  status: 'idle', // 'active'
  field: {
    dimension: DIMENSION,
    aliveCells: []
  },
  characteristics: {
    currentGeneration: null,
    generationTime: null
  }
};

const setFieldDimension = function(dimension) {
  state.field.dimension = dimension;
}

const addCell = function(cell) {
  if (!state.field.aliveCells.includes(cell)) {
    if (state.field.aliveCells.length === 0) {
      state.characteristics.currentGeneration = 1;
    }

    state.field.aliveCells.push(cell);
  }
}

const getNeighbors = function(x, y) {
  return NEIGHBOR_OFFSETS.map(function(offset) {
    const maxCoord = state.field.dimension;

    const neighborX = getNewCellCoord(x + offset.x, maxCoord);
    const neighborY = getNewCellCoord(y + offset.y, maxCoord);

    return `${neighborY}_${neighborX}`;
  });
}

const countAliveNeighbors = function(neighbors) {
  return neighbors.reduce(function(acc, neighbor) {
    return acc + (checkIsAlive(neighbor, state.field.aliveCells) ? 1 : 0);
  }, 0);
}

const applyPattern = function(pattern) {
  state.field.aliveCells = [ ...PATTERNS[pattern].coords ];
}

const applyRandom = function() {
  for (let i = 1; i <= state.field.dimension; i++) {
    for (let j = 1; j <= state.field.dimension; j++) {
      if (Math.random() < GEN_COEFF) continue;

      state.field.aliveCells.push(`${i}_${j}`);
    }
  }
}

// const checkIsGameOver = function() {
  
// }

const setFirstGenAliveCells = function(action, pattern) {
  state.field.aliveCells = [];

  if (action === 'setPattern') {
    applyPattern(pattern);
  }

  if (action === 'setRandom') {
    applyRandom();
  }

  state.characteristics.currentGeneration = 1;
}

const setNextGenAliveCells = function() {
  const nextGenAliveCells = [];
  const checkedNeighbors = [];

  state.field.aliveCells.forEach(function(cell) {
    const [x, y] = getCellCoords(cell);
    const neighbors = getNeighbors(x, y);
    const aliveNeighbours = countAliveNeighbors(neighbors);

    // 1) Если клетка выжила (2 или 3 живых соседа),
    // добавляем ее в массив
    if (aliveNeighbours === 2 || aliveNeighbours === 3) {
      nextGenAliveCells.push(cell);
    }

    // 2) Проверяем соседей клетки. Если у соседа есть
    // ровно 3 живых соседа (рождение клетки) - также
    // добавляем проверяемого соседа в массив
    neighbors.forEach(function(neighbor) {
      // Если уже проверили этого соседа при обработке
      // другой клетки, не проверяем его еще раз
      if (checkedNeighbors.includes(neighbor)) return;
      // Если этот сосед живой, то проверка не нужна,
      // т.к. он будет проверен в цикле по живым клеткам
      if (checkIsAlive(neighbor, state.field.aliveCells)) return;

      const [x, y] = getCellCoords(neighbor);
      const aliveNeighbours = countAliveNeighbors(getNeighbors(x, y));

      if (aliveNeighbours === 3) {
        nextGenAliveCells.push(neighbor);
      }

      checkedNeighbors.push(neighbor);
    });
  });

  state.field.aliveCells = [ ...nextGenAliveCells ];
}

const reset = function() {
  state.field.aliveCells = [];

  state.characteristics.currentGeneration = null;
  state.characteristics.generationTime = null;
}

export {
  state,
  setFieldDimension,
  addCell,
  setFirstGenAliveCells,
  setNextGenAliveCells,
  reset
};
