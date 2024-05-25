const X_AXIS = 10;
const Y_AXIS = 10;
const MIN_DIMENSION = 6;

const NEIGHBOR_OFFSETS = [
  { x: -1, y: -1 }, 
  { x: 0, y: -1 }, 
  { x: 1, y: -1 }, 
  { x: -1, y: 0 }, 
  { x: 1, y: 0 }, 
  { x: -1, y: 1 }, 
  { x: 0, y: 1 }, 
  { x: 1, y: 1 }
];

// Patterns
const PATTERNS = {
  blinker: ['2_1', '2_2', '2_3'],
  glider: ['1_3', '2_1', '2_3', '3_2', '3_3']
};

export {
  X_AXIS,
  Y_AXIS,
  MIN_DIMENSION,
  PATTERNS,
  NEIGHBOR_OFFSETS
};
