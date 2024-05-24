const X_AXIS = 10;
const Y_AXIS = 10;
const MIN_DIM = 6;

const NEIGHBOUR_OFFSETS = [
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
const GLIDER_PATTERN = {
  '1_1': 0,
  '1_2': 0,
  '1_3': 1,
  '2_1': 1,
  '2_2': 0,
  '2_3': 1,
  '3_1': 0,
  '3_2': 1,
  '3_3': 1
};

export {
  X_AXIS,
  Y_AXIS,
  MIN_DIM,
  GLIDER_PATTERN,
  NEIGHBOUR_OFFSETS
};
