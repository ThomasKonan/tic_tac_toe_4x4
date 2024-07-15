// X - O - ''

type Player = "X" | "O";
type Cell = Player | "";

export class TicTacToe {
  board: Cell[][];
  currentPlayer: Player;

  constructor() {
    this.board = [
      ["X", "X", "X", "O"],
      ["X", "X", "", ""],
      ["X", "", "X", ""],
      ["O", "", "", "X"],
    ];

    this.currentPlayer = "X";

    const isWinner = this.checkWinner("X");
    console.log("X is the winner", isWinner);
  }

  checkWinner(player: Player) {
    if (
      this.check4Corner(player) ||
      this.checkVertical(player) ||
      this.checkHorizontal(player) ||
      this.checkDiagonal(player) ||
      this.checkBoxes(player)
    )
      return true;

    return false;
  }

  check4Corner(player: Player) {
    if (
      this.board[0][0] === player &&
      this.board[0][3] === player &&
      this.board[3][0] === player &&
      this.board[3][3] === player
    ) {
      console.log("matched by 4 corners");
      return true;
    }

    return false;
  }

  checkVertical(player: Player) {
    // if first row all columns is same player he is the winner
    for (let col = 0; col < 4; col++) {
      if (
        this.board[0][col] === player &&
        this.board[1][col] === player &&
        this.board[2][col] === player &&
        this.board[3][col] === player
      ) {
        console.log("matched by vertical");
        return true;
      }
    }

    return false;
  }

  checkHorizontal(player: Player) {
    // if first column all rows is same player he is the winner
    for (let row = 0; row < 4; row++) {
      if (
        this.board[row][0] === player &&
        this.board[row][1] === player &&
        this.board[row][2] === player &&
        this.board[row][3] === player
      ) {
        console.log("matched by horizontal");
        return true;
      }
    }

    return false;
  }

  checkDiagonal(player: Player) {
    const firstLine =
      this.board[0][0] === player &&
      this.board[1][1] === player &&
      this.board[2][2] === player &&
      this.board[3][3] === player; // line: \

    const secondLine =
      this.board[0][3] === player &&
      this.board[0][3] === player &&
      this.board[0][3] === player &&
      this.board[0][3] === player; // line: /
    if (firstLine || secondLine) {
      console.log("matched by diagonal");
      return true;
    }
    return false;
  }

  checkBoxes(player: Player) {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          this.board[row][col] === player &&
          this.board[row][col + 1] === player &&
          this.board[row + 1][col] === player &&
          this.board[row + 1][col + 1] === player
        ) {
          console.log("matched by 2x2 boxes");
          return true;
        }
      }
    }

    return false;
  }
}
