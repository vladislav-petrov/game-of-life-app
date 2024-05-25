import { getCellCoords } from '../helpers.js';

class Field {
  #canvas;
  #context;
  #width;
  #height;
  #cellWidth;
  #cellHeight;

  #color = '#000000';

  _parentElement = document.querySelector('.field');

  constructor(cellWidth, cellHeight) {
    this.#canvas = document.getElementById('field');
    this.#context = this.#canvas.getContext('2d');

    this.#width = this.#canvas.offsetWidth;
    this.#height = this.#canvas.offsetHeight;

    this.#cellWidth = cellWidth;
    this.#cellHeight = cellHeight;

    this.#normalizeScale();
  }

  #normalizeScale() {
    const { devicePixelRatio: pixelRatio } = window;

		if (pixelRatio > 1) {
      this.#canvas.width = this.#width * pixelRatio;
      this.#canvas.height = this.#height * pixelRatio;

			this.#canvas.style.width = `${this.#width}px`;
			this.#canvas.style.height = `${this.#height}px`;

			this.#context.scale(pixelRatio, pixelRatio);
		}
  }

  drawField() {
    this.#context.strokeStyle = this.#color;

		for (let i = 0; i <= this.#width; i += this.#cellWidth) {
			this.#context.beginPath();
			this.#context.moveTo(i, 0);
			this.#context.lineTo(i, this.#height);
			this.#context.stroke();
		}

		for (let j = 0; j <= this.#height; j += this.#cellHeight) {
			this.#context.beginPath();
			this.#context.moveTo(0, j);
			this.#context.lineTo(this.#width, j);
			this.#context.stroke();
		}
  }

  drawCells(cells) {
    this.#context.fillStyle = this.#color;

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
