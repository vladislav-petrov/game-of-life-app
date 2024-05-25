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
  blinker: ['1_0', '1_1', '1_2'],
  glider: ['0_2', '1_0', '1_2', '2_1', '2_2']
};

export {
  X_AXIS,
  Y_AXIS,
  MIN_DIMENSION,
  PATTERNS,
  NEIGHBOR_OFFSETS
};
