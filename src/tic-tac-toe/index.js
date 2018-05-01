const size = 3;
const tokens = {
  first: 'X',
  second: 'O',
  empty: '-'
};

// Tic Tac Toe game
class Game {
  constructor() {
    cellCount = Math.pow(size, 2);
    grid = Array.from(tokens.empty.repeat(this.cellCount));
  }
}