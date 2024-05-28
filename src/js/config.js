const MIN_DIMENSION = 6;
const DIMENSION = 10;
const FIELD_SIZE = 800;
const CELL_SIZE = 8;
const GRID_COLOR = '#686A6C';
const CELLS_COLOR = '#000000';

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

const PATTERNS = {
  blinker: {
    name: 'Мигалка',
    coords: ['2_1', '2_2', '2_3']
  },
  glider: {
    name: 'Глайдер',
    coords: ['1_3', '2_1', '2_3', '3_2', '3_3']
  },
  pentamino: {
    name: 'R-пентамино',
    coords: ['1_2', '2_2', '2_3', '3_1', '3_2']
  },
  tub: {
    name: 'Ящик',
    coords: ['1_2', '2_1', '2_3', '3_2']
  },
  boat: {
    name: 'Лодка',
    coords: ['1_2', '2_1', '2_3', '3_2', '3_3']
  }
};

export {
  MIN_DIMENSION,
  DIMENSION,
  FIELD_SIZE,
  CELL_SIZE,
  GRID_COLOR,
  CELLS_COLOR,
  PATTERNS,
  NEIGHBOR_OFFSETS
};
