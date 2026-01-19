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

function isSafe(board, row, col, num) {
  for (let i = 0; i < SIZE; i++) {
    if (board[row][i] === num) return false;
    if (board[i][col] === num) return false;
  }

  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === num) return false;
    }
  }

  return true;
}

function findEmptyCell(board) {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c] === EMPTY) {
        return { row: r, col: c };
      }
    }
  }
  return null;
}

function solve(board, randomOrder) {
  const emptyCell = findEmptyCell(board);
  if (emptyCell === null) return true;

  const row = emptyCell.row;
  const col = emptyCell.col;

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (randomOrder) shuffle(numbers);

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (isSafe(board, row, col, num)) {
      board[row][col] = num;

      if (solve(board, randomOrder)) {
        return true;
      }

      board[row][col] = EMPTY;
    }
  }

  return false;
}

createGridUI();
