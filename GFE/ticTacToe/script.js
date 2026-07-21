let board = Array(9).fill(null);
let isNextX = true;

const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const resetBtn = document.getElementById("reset");

const winnerCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function getWinner() {
    for(const combination of winnerCombination) {
        const [a,b,c] = combination;

        if(board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

function handleClick(index) {
    const winner = getWinner();

    if(board[index] || winner) {
        return;
    }

    board[index] = isNextX ? "X" : "O";
    isNextX = !isNextX;

    render();
}

function renderBoard() {
    boardElement.innerHTML = "";

    board.forEach((value, index) => {
        const button = document.createElement("button");

        button.className = "cell";
        button.textContent = value ?? "";

        button.addEventListener("click", () => {
            handleClick(index);
        });

        boardElement.appendChild(button);
    });
}

function renderStatus() {
    const winner = getWinner();

    if(winner) {
        statusElement.textContent = `Winner is ${winner}`;
    } else {
        statusElement.textContent = `Next Player is: ${isNextX ? "X" : "O"}`;
    }
}

function render() {
    renderBoard();
    renderStatus();
}

resetBtn.addEventListener("click", () => {
    board = Array(9).fill(null);
    isNextX = true;

    render();
});

render();
