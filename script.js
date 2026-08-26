const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const HUMAN = "X";
const BOT = "O";

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Human move
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.dataset.index;

        if (board[index] !== "" || gameOver) return;

        board[index] = HUMAN;
        updateBoard();

        if (checkWinner(board, HUMAN)) {
            endGame("You Win! 🎉");
            return;
        }

        if (isDraw(board)) {
            endGame("It's a Draw! 🤝");
            return;
        }

        statusText.textContent = "Bot is thinking...";

        setTimeout(() => {
            botMove();
        }, 400);
    });
});

function botMove() {
    if (gameOver) return;

    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            board[i] = BOT;

            let score = minimax(board, 0, false);

            board[i] = "";

            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    board[move] = BOT;
    updateBoard();

    if (checkWinner(board, BOT)) {
        endGame("Bot Wins! 🤖");
        return;
    }

    if (isDraw(board)) {
        endGame("It's a Draw! 🤝");
        return;
    }

    statusText.textContent = "Your Turn";
}

// Minimax algorithm
function minimax(board, depth, isMaximizing) {

    if (checkWinner(board, BOT)) {
        return 10 - depth;
    }

    if (checkWinner(board, HUMAN)) {
        return depth - 10;
    }

    if (isDraw(board)) {
        return 0;
    }

    if (isMaximizing) {

        let bestScore = -Infinity;

        for (let i = 0; i < 9; i++) {

            if (board[i] === "") {
                board[i] = BOT;

                let score = minimax(board, depth + 1, false);

                board[i] = "";

                bestScore = Math.max(bestScore, score);
            }
        }

        return bestScore;

    } else {

        let bestScore = Infinity;

        for (let i = 0; i < 9; i++) {

            if (board[i] === "") {
                board[i] = HUMAN;

                let score = minimax(board, depth + 1, true);

                board[i] = "";

                bestScore = Math.min(bestScore, score);
            }
        }

        return bestScore;
    }
}

function checkWinner(board, player) {
    return winningPatterns.some(pattern => {
        return pattern.every(index => board[index] === player);
    });
}

function isDraw(board) {
    return board.every(cell => cell !== "");
}

function updateBoard() {
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
        cell.disabled = board[index] !== "";
    });
}

function endGame(message) {
    gameOver = true;
    statusText.textContent = message;

    cells.forEach(cell => {
        cell.disabled = true;
    });
}

restartBtn.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;

    cells.forEach(cell => {
        cell.textContent = "";
        cell.disabled = false;
    });

    statusText.textContent = "Your Turn";
});