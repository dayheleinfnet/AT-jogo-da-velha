let player = "X";
let board = new Array(3).fill(Array(3));
let winState = false;
let tiedState = false;
const winMessageElement = document.querySelector("#winMessage")
const winnerElement = document.querySelector("#winner")
const tiedMessageElement = document.querySelector("#tiedMessage")
const allElements = document.querySelectorAll(".tile")


const togglePlayer = () => {
  if (player === "X") player = "O"
  else player = "X"

  const element = document.querySelector("#sJogadorDaVez");

  element.textContent = player;
}

const selectedTile = (element) => {

  if (!element.textContent) {
    element.textContent = player
    insertBoard(element.id - 1)
    verifyOld()

    !tiedState && verifyWin()

    !winState && togglePlayer()
  }
}

const verifyWin = () => {
  verifyWinRow()
  verifyWinColumn()
  verifyWinDiagonal()
}

const verifyOld = () => {
  if (Array.from(allElements).every((element) => element.textContent) && !winState) {
    tiedState = true;
    tiedMessageElement.style.display = "block";

    blockBoard();
  }
}

const verifyWinRow = () => {
  board[0].map((col, i) => board.map(row => {
    if (row.every((element) => element === player)) {
      setWinner()
    }
  }))
}

const getColumnFromBoard = (column) => {
  return board.map(x => x[column])
}

const verifyWinColumn = () => {
  board[0].map((col, i) => {
    if (getColumnFromBoard(i).every((element) => element === player)) {
      setWinner()
    }
  })
}

const getDiagonalFromBoard = () => {
  let principal = [], secondary = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

      if (i == j)
        principal.push(board[i][j]);

      if ((i + j) == (3 - 1))
        secondary.push(board[i][j]);
    }
  }
  return { principal, secondary }
}

const verifyWinDiagonal = () => {
  const { principal, secondary } = getDiagonalFromBoard();

  if (principal.every((element) => element === player)) {
    setWinner()
  } else if (secondary.every((element) => element === player)) {
    setWinner()
  }
}

const setWinner = () => {
  winState = true;
  blockBoard()
  winMessageElement.style.display = "block";
  winnerElement.textContent = player;
}

const blockBoard = () => {
  const boardElement = document.querySelector("#board")
  const buttonRestart = document.querySelector("#restartButton")

  buttonRestart.style.display = "block";
  boardElement.style.pointerEvents = "none";
  boardElement.style.opacity = "0.5"
}

const insertBoard = (identifier) => {
  let positionX, positionY;

  var matrix = [], i, k;
  for (i = 0, k = -1; i < 9; i++) {
    if (i % 3 === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(allElements[i].textContent);
  }

  board = matrix;
}

const resetGame = (element) => {

  const buttonRestart = document.querySelector("#restartButton")
  const boardElement = document.querySelector("#board")

  Array.from(allElements).map(element => element.textContent = "");

  winMessageElement.style.display = "none";
  tiedMessageElement.style.display = "none";
  winState = false;
  tiedState = false;

  buttonRestart.style.display = "none";
  boardElement.style.pointerEvents = "unset";
  boardElement.style.opacity = "1"

}