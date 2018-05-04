module.exports = class Diamond {
  constructor() {
    this.letters = Array.from('ABCDEFGHIJKLMNOPQRSTUVXYZ');
  }

  makeDiamond(letter) {
    const index = this.letters.indexOf(letter);
    const symmetricalLevel = index - 1;
    const rows = [];
    for (let i = 0; i < index; i++) {
      rows.push(makeRow(i));
    }

    for(let i = index - 2; i <= 0; i--) {
      rows.push(rows[i]);
    }

    let output = '';

    rows.forEach((row) => {
      output.concat(row.concat('\n'));
    });

    return outp
  }

  makeRow(current, max) {
    if (max === 1) {
      return 'A';
    }

    const arround = ' '.repeat(max - current);

    if (current === 1) {
      return `${arround}A${arround}`;
    }

    const letter = this.letters[current];
    const width = 2 * max - 1;

    if (current === max) {
      const middle = ' '.repeat(width -2);
      return `${letter}${middle}${letter}`;
    }

    const middle = ' '.repeat(width - 2 - (arround * 2));
    return `${arround}${letter}${middle}${letter}${arround}`
  }
}