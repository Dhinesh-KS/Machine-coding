const board = document.querySelector("#board");
const winner = document.querySelector("#winner");
const resetGame = document.querySelector("#reset");

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Initialize the game board
function initBoard() {
  board.innerHTML = "";
  boardState = Array(9).fill(null);
  currentPlayer = "X";
  winner.textContent = "";

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    board.appendChild(cell);
  }
}

board.addEventListener("click", (e) => {
  const cell = e.target;
  const index = cell.dataset.index;
  if (index && !boardState[index]) {
    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("filled");
    if (checkWin(currentPlayer)) {
      winner.textContent = `Player "${currentPlayer}" has won the game`;
    } else if (boardState.every((e) => e !== null)) {
      winner.textContent = "Match tied";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
});

resetGame.addEventListener("click", (e) => {
  initBoard();
});

function checkWin(currentPlayer) {
  return winningCombinations.some((combination) =>
    combination.every((e) => boardState[e] === currentPlayer)
  );
}

initBoard();
