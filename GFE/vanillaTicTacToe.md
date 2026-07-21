```bash
# HTML

<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Tic Tac Toe</title>

            <style>
                body{
                font-family: Arial;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                background:#222;
                color:white;
                }

                .container{
                text-align:center;
                }

                .board{
                display:grid;
                grid-template-columns:repeat(3,80px);
                gap:10px;
                margin:20px 0;
                }

                .cell{
                width:80px;
                height:80px;
                font-size:32px;
                cursor:pointer;
                }

                button{
                cursor:pointer;
                }
            </style>
        </head>

        <body>

            <div class="container">

                <h1>Tic Tac Toe</h1>

                <h2 id="status"></h2>

                <div class="board" id="boarv, id"></div>

                <button id="reset">Reset</button>
            </div>

            <script src="script.js"></script>

        </body>
    </html>



# Javasript (script.js)

let board = Array(9).fill("");
let isNextX = true;

const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const resetButton = document.getElementById("reset");

const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function getWinner() {
    for(const combination of winnerCombinations) {
        const [a,b,c] = combination;

        if(board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}


function handleClick (index) {
    const winner = getWinner();

    if(board[index] || winner) return;

    board[index] = isNextX ? "X" : "O";
    isNextX = !isNextX;

    render();
}

# render board

function renderBoard() {
    boardElement.innerHTML = "";

    board.forEach((value, index) => {
        const button = document.createElementById("button");

        button.className = "cell";

        button.textContent = value ?? "";

        button.addEventListener("click", () => handleClick(index));

        boardElement.appendChild(button);
    });
}

function renderStatus() {
    const winner = getWinner();

    if(winner) {
        statusElement.textContent = `Winner is ${winner}`;
    } else {
        statusElement.textContent = `Next Player : ${isNextX ? "X" : "O"} `;
    }
}

#  Render Everything

function render () {
    renderBoard();
    renderStatus();
}

resetButton.addEventListener("click", () => {
    board = Array(9).fill(null);
    isNextX = true;
    render();
});

render();

```
