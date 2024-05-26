import { getCellCoords } from '../helpers.js';

class Field {
  #canvas;
  #context;
  #rect;
  #cellWidth;
  #cellHeight;

  #gridColor = '#686a6c';
  #cellsColor = '#000000';

  constructor(cellWidth, cellHeight) {
    this.#canvas = document.getElementById('field');
    this.#context = this.#canvas.getContext('2d');
    this.#rect = this.#canvas.getBoundingClientRect();

    this.#cellWidth = cellWidth;
    this.#cellHeight = cellHeight;

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

  drawField() {
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

  drawCell(cell) {
    const [x, y] = getCellCoords(cell);

    this.#context.fillRect(
      (x - 1) * this.#cellWidth,
      (y - 1) * this.#cellHeight,
      this.#cellWidth,
      this.#cellHeight
    );
  }

  drawCells(cells) {
    cells.forEach((cell) => this.drawCell(cell));
  }

  subscribeHandlerManualDraw(handler) {
    const eventListenerFunction = (event) => {
      const offsetX = event.clientX - this.#rect.left;
      const offsetY = event.clientY - this.#rect.top;
      const x = Math.trunc(offsetX / this.#cellWidth) + 1;
      const y = Math.trunc(offsetY / this.#cellHeight) + 1;
    
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
