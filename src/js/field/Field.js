import {
  FIELD_SIZE,
  CELL_SIZE,
  GRID_COLOR,
  CELLS_COLOR
} from '../config.js';

import { getCellCoords, getCellSize } from '../helpers.js';

class Field {
  #canvas;
  #context;
  #cellSize;

  #gridColor = GRID_COLOR;
  #cellsColor = CELLS_COLOR;

  constructor() {
    this.#canvas = document.getElementById('field');
    this.#context = this.#canvas.getContext('2d');

    this.#context.strokeStyle = this.#gridColor;
    this.#context.fillStyle = this.#cellsColor;

    this.#normalizeScale();
  }

  #normalizeScale() {
    const rect = this.#canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio;

    this.#canvas.width = rect.width * dpr;
    this.#canvas.height = rect.height * dpr;

    this.#canvas.style.width = `${rect.width}px`;
    this.#canvas.style.height = `${rect.height}px`;

    this.#context.scale(dpr, dpr);
  }

  reset() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  drawField(dimension) {
    this.#cellSize = dimension > 100 ?
      CELL_SIZE : getCellSize(FIELD_SIZE, dimension);

		for (let i = 0; Math.round(i) <= this.#canvas.width; i += this.#cellSize) {
			this.#context.beginPath();
			this.#context.moveTo(Math.round(i), 0);
			this.#context.lineTo(Math.round(i), this.#canvas.height);
			this.#context.stroke();
		}

		for (let j = 0; Math.round(j) <= this.#canvas.height; j += this.#cellSize) {
			this.#context.beginPath();
			this.#context.moveTo(0, Math.round(j));
			this.#context.lineTo(this.#canvas.width, Math.round(j));
			this.#context.stroke();
		}
  }

  drawCell(cell) {
    const [x, y] = getCellCoords(cell);

    this.#context.fillRect(
      (x - 1) * this.#cellSize,
      (y - 1) * this.#cellSize,
      this.#cellSize,
      this.#cellSize
    );
  }

  drawCells(cells) {
    cells.forEach((cell) => this.drawCell(cell));
  }

  reset() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  subscribeHandlerManualDraw(handler) {
    const eventListenerFunction = (event) => {
      const rect = this.#canvas.getBoundingClientRect();

      const offsetX = event.x - rect.left;
      const offsetY = event.y - rect.top;

      const x = Math.trunc(offsetX / this.#cellSize) + 1;
      const y = Math.trunc(offsetY / this.#cellSize) + 1;
    
      handler(`${y}_${x}`);
    }

    this.#canvas.addEventListener('click', eventListenerFunction);

    this.#canvas.addEventListener('mousedown', () => {
      this.#canvas.addEventListener('mousemove', eventListenerFunction);
    });

    this.#canvas.addEventListener('mouseup', () => {
      this.#canvas.removeEventListener('mousemove', eventListenerFunction);
    });
  }
}

export default Field;
