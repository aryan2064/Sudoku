# Sudoku Solver and Generator

This project is a simple browser-based Sudoku app. It can:

- generate a new Sudoku puzzle
- let you fill in values manually
- solve the current board using backtracking

## What Is Sudoku?

Sudoku is a 9x9 number puzzle. The board is split into nine 3x3 boxes.

Rules:

- each row must contain digits 1-9 exactly once
- each column must contain digits 1-9 exactly once
- each 3x3 box must contain digits 1-9 exactly once

Empty cells are filled by logic (or by a solver algorithm).

## Backtracking Algorithm (How Solving Works)

This project uses recursive backtracking to solve puzzles.

High-level flow:

1. Find an empty cell.
2. Try numbers 1 through 9 (or shuffled order for generation).
3. Check if the number is valid in row, column, and 3x3 box.
4. If valid, place it and recurse to solve the next empty cell.
5. If recursion fails, undo the placement (backtrack) and try the next number.
6. If no numbers fit, return failure to the previous step.

Why this works:

- the algorithm explores possibilities depth-first
- invalid paths are discarded early via `isSafe(...)`
- eventually it either finds a full valid board or proves no solution exists

## My Project Approach

I built this in stages so each part stayed simple and testable:

1. **Set up the UI skeleton**
   - basic HTML structure
   - Sudoku container and control buttons
2. **Build the grid interface**
   - 9x9 input cells created dynamically
   - styling for readability and 3x3 box borders
   - basic input validation (only digits 1-9)
3. **Implement solving**
   - board model helpers
   - `isSafe`, `findEmptyCell`, and recursive `solve`
4. **Implement puzzle generation**
   - generate a full solved board
   - remove cells randomly to create a playable puzzle
5. **Connect UI + logic**
   - render board values
   - read current board from inputs
   - wire Generate and Solve button actions
   - lock given cells for a cleaner play experience

This staged workflow made debugging easier and kept each commit focused on one meaningful improvement.
