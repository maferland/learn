const Game = require('./index');

describe('Tic tac toe', () => {
  test('Initial game scenario', () => {
    const game = new Game();

    game.play(0, 0, 0);
    game.play(0, 0, 1);
    game.play(0, 1, 1);
    game.play(1, 0, 0);
    game.play(2, 0, 0);

    expect(game.getOver()).toBeTruthy();
    expect(game.getTie()).toBeFalsy();
  });

  test('Validate isOver() -- Vertical', () => {
    const game = new Game();

    game.play(0, 0, 0);
    game.play(0, 1, 0);
    game.play(0, 2, 0);
    
    expect(game.getOver()).toBeTruthy();
    expect(game.getTie()).toBeFalsy();
  });

  test('Validate isOver() -- Diagonal', () => {
    const game = new Game();

    game.play(0, 0, 0);
    game.play(1, 1, 0);
    game.play(2, 2, 0);
  });

  test('Validate isOver() -- Diagonal', () => {
    const game = new Game();

    game.play(0, 2, 0);
    game.play(1, 1, 0);
    game.play(2, 0, 0);

    expect(game.getOver()).toBeTruthy();
    expect(game.getTie()).toBeFalsy();
  });

  test('Validate isOver() -- Tie', () => {
    const game = new Game();

    game.play(0, 0, 1);
    game.play(0, 1, 0);
    game.play(0, 2, 1);
    game.play(1, 0, 1);
    game.play(1, 1, 0);
    game.play(1, 2, 0);
    game.play(2, 0, 0);
    game.play(2, 1, 1);
    game.play(2, 2, 0);

    expect(game.getOver()).toBeTruthy();
    expect(game.getTie()).toBeTruthy();
  });
});