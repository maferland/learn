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
    const diagonals = this.getDiagonals();

    const lines = rows.concat(cols).concat(diagonals);

    let over = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const set = new Set(line);
      if (set.size === 1 && line[0] != tokens.empty) {
        over = true;
        break;
      }
    }

    if (over) {
      console.log('Somebody has won!');
    }
    else if (this.turn === 9) {
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
        this.grid[this.getIndex(col, i)]
    );
  }

  getDiagonals() {
    let diagonals = new Array(2);
    diagonals[0] = [];
    diagonals[1] = [];
    let i = 0;

    for (let i = 0; i < size; i++) {
      let index = this.getIndex(i, i);
      diagonals[0].push(this.grid[index]);
      index = this.getIndex(size - 1 - i, i);
      diagonals[1].push(this.grid[index]);
    }
    return diagonals;
  }

  play(x, y, player) {
    const index = this.getIndex(x, y);
    if (this.grid[index] != tokens.empty) {
      console.log('This cell is already taken. Play again!');
      return;
    }
    const token = player == 0 ? tokens.first : tokens.second;
    this.grid[index] = token;
    ++this.turn;

    if (this.isOver()) {
      console.log('Game over');
    }
  }

  getIndex(x, y) {
    return x + y * size;
  }
}

let game = new Game();

console.log('Validate grid printing');
console.log('Validate play function');
console.log('Validate no overwrite rule');
game.printGrid();
game.play(0, 0, 0);
game.printGrid();
game.play(0, 0, 1);
game.play(0, 1, 1);
game.printGrid();


console.log('Validate isOver() -- Horizontal')
game.play(1, 0, 0);
game.printGrid();

game.play(2, 0, 0);
game.printGrid();

console.log('Validate isOver() -- Vertical')
game = new Game();
game.printGrid();
game.play(0, 0, 0);
game.play(0, 1, 0);
game.play(0, 2, 0);
game.printGrid();

console.log('Validate isOver() -- Diagonal')
game = new Game();
game.printGrid();
game.play(0, 0, 0);
game.play(1, 1, 0);
game.play(2, 2, 0);
game.printGrid();

console.log('Validate isOver() -- Diagonal')
game = new Game();
game.printGrid();
game.play(0, 2, 0);
game.play(1, 1, 0);
game.play(2, 0, 0);
game.printGrid();