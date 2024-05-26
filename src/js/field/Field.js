import { getCellCoords } from '../helpers.js';

class Field {
  #canvas;
  #context;
  #cellWidth;
  #cellHeight;

  #gridColor = '#686a6c';
  #cellsColor = '#000000';

  constructor(cellWidth, cellHeight) {
    this.#canvas = document.getElementById('field');
    this.#context = this.#canvas.getContext('2d');

    this.#cellWidth = cellWidth;
    this.#cellHeight = cellHeight;

    this.#normalizeScale();
  }

  #normalizeScale() {
    const dpr = window.devicePixelRatio;
    const rect = this.#canvas.getBoundingClientRect();

    this.#canvas.width = rect.width * dpr;
    this.#canvas.height = rect.height * dpr;

    this.#canvas.style.width = `${rect.width}px`;
    this.#canvas.style.height = `${rect.height}px`;

    this.#context.scale(dpr, dpr);
  }

  drawField() {
    this.#context.strokeStyle = this.#gridColor;

		for (let i = 0; i <= this.#canvas.width; i += this.#cellWidth) {
			this.#context.beginPath();
			this.#context.moveTo(i, 0);
			this.#context.lineTo(i, this.#canvas.height);
			this.#context.stroke();
		}

		for (let j = 0; j <= this.#canvas.height; j += this.#cellHeight) {
			this.#context.beginPath();
			this.#context.moveTo(0, j);
			this.#context.lineTo(this.#canvas.width, j);
			this.#context.stroke();
		}
  }

  drawCells(cells) {
    this.#context.fillStyle = this.#cellsColor;

    cells.forEach((cell) => {
      const [x, y] = getCellCoords(cell);

      this.#context.fillRect(
        (x - 1) * this.#cellWidth,
        (y - 1) * this.#cellHeight,
        this.#cellWidth,
        this.#cellHeight
      );
    });
  }
}

export default Field;
