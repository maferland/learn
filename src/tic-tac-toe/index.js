const size = 3;
const tokens = {
  first: 'X',
  second: 'O',
  empty: '-'
};

// Tic Tac Toe game
class Game {
  constructor() {
    this.cellCount = Math.pow(size, 2);
    this.grid = Array.from(tokens.empty.repeat(this.cellCount));
    this.turn = 0;
  }

  printGrid() {
    for (let i = 0; i < size; i++) {
      this.printRow(i);
    }
    console.log();
  }

  printRow(rowNum) {
    const row = this.getRow(rowNum);
    for (let i = size - 1; i >= 1; --i) {
      row.splice(i, 0, '|');
    }

    row.forEach((token) => process.stdout.write(token));
    console.log();
  }

  isOver() {
    const rows = Array.from({ length: size }, (v, i) => this.getRow(i));
    const cols = Array.from({ length: size }, (v, i) => this.getCol(i));
    const diagonals = [];

    const lines = rows.concat(cols).concat(diagonals);

    let over = false;
    for (line in lines) {
      if (new Set(line).length > 1 && line[0] != tokens.empty) {
        over = true;
        break;
      }
    }

    if(over) {
      console.log('Somebody has won!');
    }
    else if(this.turn === 9) {
      console.log(`It's a tie!`)
    }

    return over;
  }

  getRow(row) {
    const firstIndex = row * size;
    return this.grid.slice(firstIndex, firstIndex + size);
  }

  getCol(col) {
    return Array.from({ length: size },
      (_, i) =>
        this.grid(this.getIndex(col, i))
    );
  }

  play(x, y, player) {
    const index = this.getIndex(x, y);
    if (this.grid[index] != tokens.empty) {
      console.log('This cell is already taken. Play again!');
      return;
    }
    const token = player == 0 ? tokens.first : tokens.second;
    this.grid[index] = token;
    ++turn;

    if(this.isOver()) {
      console.log('Game over');
    }
  }

  getIndex(x, y) {
    return x + y * size;
  }
}


const game = new Game();

game.printGrid();
game.play(0, 0, 0);
game.printGrid();
game.play(0, 0, 1);
game.play(0, 1, 1);
game.printGrid();

game.play(1, 0, 0);
game.play(2, 0, 0);
