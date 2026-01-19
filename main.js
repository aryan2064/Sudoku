const SIZE = 9;
const EMPTY = 0;
const CLUES = 35;

const grid = document.getElementById('sudoku-grid');
const generateBtn = document.getElementById('generate-btn');
const solveBtn = document.getElementById('solve-btn');

let puzzle = createEmptyBoard();

function createEmptyBoard() {
  const board = [];
  for (let r = 0; r < SIZE; r++) {
    board.push(new Array(SIZE).fill(EMPTY));
  }
  return board;
}

function createGridUI() {
  grid.innerHTML = '';

  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const input = document.createElement('input');

      input.type = 'text';
      input.maxLength = 1;
      input.className = 'cell';
      input.id = `cell-${r}-${c}`;

      if (r % 3 === 0) input.classList.add('top');
      if (c % 3 === 0) input.classList.add('left');
      if (r === SIZE - 1) input.classList.add('bottom');
      if (c === SIZE - 1) input.classList.add('right');

      input.addEventListener('input', function () {
        if (!/^[1-9]$/.test(input.value)) {
          input.value = '';
        }
      });

      grid.appendChild(input);
    }
  }
}

createGridUI();
