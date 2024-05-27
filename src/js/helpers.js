const getCellCoords = function(cell) {
  const [y, x] = cell.split('_');

  return [+x, +y];
}

const getNewCellCoord = function(coord, maxCoord) {
  if (coord < 1) {
    return maxCoord;
  }

  if (coord > maxCoord) {
    return 1;
  }

  return coord;
}

const checkIsAlive = (cell, aliveCells) => aliveCells.includes(cell);

const getCellSize = (fieldSize, dimension) => fieldSize / dimension;

export {
  getCellCoords,
  getNewCellCoord,
  checkIsAlive,
  getCellSize
};
