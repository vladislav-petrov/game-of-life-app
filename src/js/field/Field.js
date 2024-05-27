import { FIELD_SIZE } from '../config.js';

import { getCellCoords, getCellSize } from '../helpers.js';

class Field {
  #canvas;
  #context;
  #rect;
  #cellSize;

  #gridColor = '#686a6c';
  #cellsColor = '#000000';

  constructor() {
    this.#canvas = document.getElementById('field');
    this.#context = this.#canvas.getContext('2d');
    this.#rect = this.#canvas.getBoundingClientRect();

    this.#context.strokeStyle = this.#gridColor;
    this.#context.fillStyle = this.#cellsColor;

    this.#normalizeScale();
  }

  #normalizeScale() {
    const dpr = window.devicePixelRatio;

    this.#canvas.width = this.#rect.width * dpr;
    this.#canvas.height = this.#rect.height * dpr;

    this.#canvas.style.width = `${this.#rect.width}px`;
    this.#canvas.style.height = `${this.#rect.height}px`;

    this.#context.scale(dpr, dpr);
  }

  reset() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  drawField(dimension) {
    this.#cellSize = Math.trunc(getCellSize(FIELD_SIZE, dimension));

		for (let i = 0; i <= this.#canvas.width; i += this.#cellSize) {
			this.#context.beginPath();
			this.#context.moveTo(i, 0);
			this.#context.lineTo(i, this.#canvas.height);
			this.#context.stroke();
		}

		for (let j = 0; j <= this.#canvas.height; j += this.#cellSize) {
			this.#context.beginPath();
			this.#context.moveTo(0, j);
			this.#context.lineTo(this.#canvas.width, j);
			this.#context.stroke();
		}
  }

  drawCell(cell) {
    const [x, y] = getCellCoords(cell);

    this.#context.fillRect(
      (x) * this.#cellSize,
      (y) * this.#cellSize,
      this.#cellSize,
      this.#cellSize
    );
  }

  drawCells(cells) {
    cells.forEach((cell) => this.drawCell(cell));
  }

  reset() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

		this.drawField();
  }

  subscribeHandlerManualDraw(handler) {
    const eventListenerFunction = (event) => {
      const offsetX = event.clientX - this.#rect.left;
      const offsetY = event.clientY - this.#rect.top;

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
