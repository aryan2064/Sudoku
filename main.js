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
