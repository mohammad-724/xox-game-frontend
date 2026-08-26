live link: https://mohammad-724.github.io/xox-game-frontend/

# XOX Game – Human vs Smart Bot

A simple and interactive **XOX (Tic-Tac-Toe) game** built using **HTML, CSS, and JavaScript**. The game allows one player to compete against a smart bot that uses the **Minimax algorithm** to make intelligent moves.

## Features

* Human vs Bot gameplay
* Player plays as **X**
* Bot plays as **O**
* Intelligent bot using the **Minimax algorithm**
* Bot can block the player's winning moves
* Bot can identify its own winning opportunities
* Automatic winner and draw detection
* Restart game option
* Clean and responsive user interface
* No external libraries or frameworks

## Technologies Used

* **HTML5** – Creates the game structure
* **CSS3** – Provides styling and responsive design
* **JavaScript** – Handles game logic and user interaction
* **Minimax Algorithm** – Powers the intelligent bot

## Project Structure

```text
XOX-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in a web browser.

You can also use the **Live Server** extension in VS Code for easier development.

## How to Play

1. The player starts the game as **X**.
2. Click on any empty box to place your X.
3. The bot automatically places O after your move.
4. Try to get three Xs in a row.
5. The bot will analyze the board and make the best possible move.
6. The game ends when the player wins, the bot wins, or the board is full.

## Winning Conditions

A player wins by placing three identical symbols in a row:

* Horizontally
* Vertically
* Diagonally

Example:

```text
X | X | X
---------
O | O |  
---------
  |   |  
```

## Smart Bot

The bot uses the **Minimax algorithm** to evaluate possible moves before making a decision.

The algorithm considers different possible game outcomes:

* **Bot Win:** Positive score
* **Draw:** Neutral score
* **Player Win:** Negative score

The bot selects the move with the best possible outcome, making it a challenging opponent.

## Future Improvements

* Easy, Medium, and Hard difficulty levels
* Two-player mode
* Score tracking
* Sound effects
* Winning animations
* Dark mode
* Player name support
* Improved mobile interface

## Author

**Mohammad Azmath Ali**
