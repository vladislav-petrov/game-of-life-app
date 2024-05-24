const calcNewCoord = function(coord, maxCoord) {
  if (coord < 1) {
    return maxCoord;
  }

  if (coord > maxCoord) {
    return 1;
  }

  return coord;
}

export { calcNewCoord };
