# Simple Sudoku (JavaScript)

This is a beginner-friendly Sudoku project built with plain HTML, CSS, and JavaScript.

It has:
- A 9x9 Sudoku grid
- A **Generate Sudoku** button
- A **Solve Sudoku** button



## How the project works

When the page loads:
1. The app creates the 9x9 input grid in the browser.
2. It generates a full valid Sudoku solution.
3. It removes some values to create a puzzle.
4. It shows that puzzle on screen.

When you click:
- **Generate Sudoku**: creates a brand new puzzle.
- **Solve Sudoku**: solves the current board using backtracking.

## Backtracking algorithm (simple idea)

Backtracking is a trial-and-error method.

Steps:
1. Find an empty cell.
2. Try numbers 1 to 9.
3. For each number, check if it follows Sudoku rules:
   - not already in the same row
   - not already in the same column
   - not already in the same 3x3 box
4. If valid, place it and move to the next empty cell (recursive call).
5. If later you get stuck, remove the number (this is "backtracking") and try the next one.
6. If no empty cells are left, the board is solved.

## How puzzle generation works

1. Start with an empty board.
2. Solve it using backtracking in random number order.
3. This creates a full valid solved Sudoku.
4. Remove some cells (keep about 35 clues) to make it a playable puzzle.



## Run the project

Open `index.html` in your browser.

That is all you need.