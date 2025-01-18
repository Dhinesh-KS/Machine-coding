const board = document.getElementById("board");

for (let i = 0; i < 64; i++) {
  const cell = document.createElement("div");
  cell.dataset.index = i;
  cell.classList.add("cell");
  const row = Math.floor(i / 8);
  const col = i % 8;

  // Apply alternating colors based on row and column
  if ((row + col) % 2 === 0) {
    cell.style.backgroundColor = "#f0d9b5"; // Light color
  } else {
    cell.style.backgroundColor = "#b58863"; // Dark color
  }

  board.appendChild(cell);
}

board.addEventListener("click", (e) => {
  const position = e.target.dataset.index;
  highlightBishopMoves(position);
});

function highlightBishopMoves(position) {
  clearHighlights();
  const row = Math.floor(position / 8);
  const col = position % 8;

  for (let i = 1; i < 8; i++) {
    highlightCell(row + i, col + i);
    highlightCell(row + i, col - i);
    highlightCell(row - i, col + i);
    highlightCell(row - i, col - i);
  }
}

// Highlight a specific cell if it's on the board
function highlightCell(row, col) {
  if (row >= 0 && row < 8 && col >= 0 && col < 8) {
    const index = row * 8 + col;
    board.children[index].classList.add("highlight");
  }
}

// Clear all highlights
function clearHighlights() {
  Array.from(board.children).forEach((cell) =>
    cell.classList.remove("highlight")
  );
}
