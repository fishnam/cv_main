import { BOARD_WIDTH, BOARD_HEIGHT, FISH } from './constants.js';
import { Board } from './board.js';
import { Cell } from './cell.js';



export class Game {
  #cells = [];
  refresh = 100;

  constructor(canvas) {
    this.canvas = canvas;
    this.board = new Board(this.canvas);

    this.canvas.width = BOARD_WIDTH;
    this.canvas.height = BOARD_HEIGHT;
    this.paused = false;
  }

  initialize = () => {
    this.initializeCells();
    this.placeRepeatedPattern(FISH);
    this.launch();
  };
  lastUpdate = 0;

  launch = (timestamp) => {
    if ((timestamp - this.lastUpdate >= this.refresh) && !this.paused){
      this.board.drawBackground();
      this.updateCells();

      this.lastUpdate = timestamp;
    }
    requestAnimationFrame(this.launch);
  };

 

  initializeCells = () => {
    for (let i = 0; i < this.board.size.cellNumberX; i++) {
      this.#cells[i] = [];

      for (let j = 0; j < this.board.size.cellNumberY; j++) {
        this.#cells[i][j] = new Cell(
          this.board.context,
          i,
          j,
          this.board.size.cellSize
        );
        this.#cells[i][j].draw();
      }
    }
  };

  clearBoard = () => {
  for (let i = 0; i < this.board.size.cellNumberX; i++) {
    for (let j = 0; j < this.board.size.cellNumberY; j++) {
      this.#cells[i][j].alive = false;
    }
  }
}

  placeRandomPattern = () => {
    this.clearBoard();
    for (let i = 0; i < this.board.size.cellNumberX; i++) {
      for (let j = 0; j < this.board.size.cellNumberY; j++) {
        this.#cells[i][j].alive = Math.random() > 0.8;
      }
    }
  }

  placeRepeatedPattern(pattern, gapX = 7, gapY = 10) {
    const patternHeight = pattern.length;
    const patternWidth = pattern[0].length;

    this.clearBoard();
    for (
      let startY = 0;
      startY < this.board.size.cellNumberY;
      startY += patternHeight + gapY
    ) {
      for (
        let startX = 0;
        startX < this.board.size.cellNumberX;
        startX += patternWidth + gapX
      ) {
        for (let y = 0; y < patternHeight; y++) {
          for (let x = 0; x < patternWidth; x++) {
            if (pattern[y][x] === "1") {
              const cell = this.#cells[startX + x]?.[startY + y];
              if (cell) {
                cell.alive = true;
              }
            }
          }
        }
      }
    }
  }

  updateCells = () => {
    for (let i = 0; i < this.board.size.cellNumberX; i++) {
      for (let j = 0; j < this.board.size.cellNumberY; j++) {
        this.updateCellNeighbors(i, j);
      }
    }

    for (let i = 0; i < this.board.size.cellNumberX; i++) {
      for (let j = 0; j < this.board.size.cellNumberY; j++) {
        this.#cells[i][j].nextGeneration();
        this.#cells[i][j].draw();
      }
    }
  };

  updateCellNeighbors = (x, y) => {
    let aliveNeighborsCount = 0;

    const neighborCoords = [
      [x, y + 1],
      [x, y - 1],
      [x + 1, y],
      [x - 1, y],
      [x + 1, y + 1],
      [x - 1, y - 1],
      [x + 1, y - 1],
      [x - 1, y + 1],
    ];

    for (const coords of neighborCoords) {
      let [xCord, yCord] = coords;

      const xOutOfBounds = xCord < 0 || xCord >= this.board.size.cellNumberX;
      const yOutOfBounds = yCord < 0 || yCord >= this.board.size.cellNumberY;

      const wrappedX = xOutOfBounds
        ? (xCord + this.board.size.cellNumberX) % this.board.size.cellNumberX
        : xCord;
      const wrappedY = yOutOfBounds
        ? (yCord + this.board.size.cellNumberY) % this.board.size.cellNumberY
        : yCord;

      if (this.#cells[wrappedX]?.[wrappedY]?.alive) {
        aliveNeighborsCount++;
      }
    }
    this.#cells[x][y].neighbors = aliveNeighborsCount;
  };


    toggle = (x, y) => {
      const cell = this.#cells[x][y];
      cell.alive = !cell.alive;

      this.board.drawBackground(); //really bad implementation where it just refreshes on click 

      for (let i = 0; i < this.board.size.cellNumberX; i++) {
          for (let j = 0; j < this.board.size.cellNumberY; j++) {
              this.#cells[i][j].draw();
          }
      }
    };

  do = (input) => {
    if (input === "c"){
      this.initializeCells();
    } else if (input === "r"){
      this.placeRandomPattern();
    } else if (input === "p"){
      this.paused = !this.paused;
    } else if (input === "f"){
      this.placeRepeatedPattern(FISH);
    } else if (input === "2"){
      this.refresh = Math.max(10, this.refresh / 2);
    } else if (input === "1"){
      this.refresh = Math.min(1000, this.refresh * 2);
    }
  }
}
