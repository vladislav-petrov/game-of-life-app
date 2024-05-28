const MIN_DIMENSION = 6;
const DIMENSION = 10;
const FIELD_SIZE = 800;
const CELL_SIZE = 8;
const GRID_COLOR = '#686A6C';
const CELLS_COLOR = '#000000';

// Вероятность, что при генерации случайной конфигурации
// клетка останется пустой (для не слишком сильной
// заселенности поля)
const GEN_COEFF = 0.7;

// Задержка перед генерацией нового поколения в мс
const NEXT_GEN_TIME = 100;

// Время показа сообщения в мс
const MSG_APPEARANCE_TIME = 2000;

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
  lwss: {
    name: 'ЛКК',
    coords: ['1_1', '1_4', '2_5', '3_1', '3_5', '4_2', '4_3', '4_4', '4_5']
  },
  mwss: {
    name: 'СКК',
    coords: ['1_3', '2_1', '2_5', '3_6', '4_1', '4_6', '5_2', '5_3', '5_4', '5_5', '5_6']
  }
};

export {
  MIN_DIMENSION,
  DIMENSION,
  FIELD_SIZE,
  CELL_SIZE,
  GRID_COLOR,
  CELLS_COLOR,
  GEN_COEFF,
  NEXT_GEN_TIME,
  MSG_APPEARANCE_TIME,
  PATTERNS,
  NEIGHBOR_OFFSETS
};
