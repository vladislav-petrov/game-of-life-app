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

const getCellSize = (fieldSize, dimension) => fieldSize / dimension;

const checkIsAlive = (cell, aliveCells) => aliveCells.includes(cell);

const checkAreSetsEqual = function(set1, set2) {
  return set1.size === set2.size && [...set1].every((value) => set2.has(value));
}

export {
  getCellCoords,
  getNewCellCoord,
  checkIsAlive,
  checkAreSetsEqual,
  getCellSize
};
