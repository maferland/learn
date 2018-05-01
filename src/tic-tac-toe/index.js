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

  getRow(row) {
    const firstIndex = row * size;
    return this.grid.slice(firstIndex, firstIndex + size);
  }

  play(x, y, player) {
    const index = this.getIndex(x, y);
    const token = player == 0 ? tokens.first : token.second;
    this.grid[index] = token;
  }

  getIndex(x, y) {
    return x + y * size;
  }
}


const game = new Game();

game.printGrid();
game.play(0, 0, 0);
game.printGrid();
