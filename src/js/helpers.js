const getNewCoord = function(coord, maxCoord) {
  if (coord < 1) {
    return maxCoord;
  }

  if (coord > maxCoord) {
    return 1;
  }

  return coord;
}

const getAliveNeighbours = function(neighbours) {
  return Object
    .values(neighbours)
    .filter((value) => value).length;
}

const getNewCellValue = function(value, aliveNeighbours) {
  // Клетка жива и имеет 2 или 3 живых соседа
  if (value && [2, 3].includes(aliveNeighbours)) return 1;
  // Клетка мертва и имеет 3 живых соседа
  if (!value && aliveNeighbours === 3) return 1;

  return 0;
}

export {
  getNewCoord,
  getAliveNeighbours,
  getNewCellValue
};
