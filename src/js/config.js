const MIN_DIMENSION = 6;
const DIMENSION = 10;

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
  glider: ['1_3', '2_1', '2_3', '3_2', '3_3'],
  pentamino: ['1_2', '2_2', '2_3', '3_1', '3_2'],
  tub: ['1_2', '2_1', '2_3', '3_2'],
  boat: ['1_2', '2_1', '2_3', '3_2', '3_3']
};

export {
  MIN_DIMENSION,
  DIMENSION,
  PATTERNS,
  NEIGHBOR_OFFSETS
};
