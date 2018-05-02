class Diamond {
  constructor() {
    this.letters = Array.from('ABCDEFGHIJKLMNOPQRSTUVXYZ');
  }

  makeDiamond(letter) {
    const index = this.letters.indexOf(letter);

    if (index === 0) {
      return 'A\n';
    }

    const rows = [];
    for (let i = 0; i <= index; i++) {
      rows.push(this.makeRow(i, index));
    }

    for (let i = index - 1; i >= 0; --i) {
      rows.push(rows[i]);
    }

    let output = '';

    rows.forEach((row) => {
      output = output.concat(row.concat('\n'));
    });

    return output;
  }

  makeRow(current, max) {
    const arround = ' '.repeat(max - current);

    if (current === 0) {
      return `${arround}A${arround}`;
    }

    const letter = this.letters[current];
    const width = 2 * max + 1;

    if (current === max) {
      const middle = ' '.repeat(width - 2);
      return `${letter}${middle}${letter}`;
    }

    const middle = ' '.repeat(width - 2 - (arround.length * 2));
    return `${arround}${letter}${middle}${letter}${arround}`
  }
}

module.exports = Diamond;

const diamond = new Diamond();

console.log(diamond.makeDiamond('A'));
console.log(diamond.makeDiamond('B'));
console.log(diamond.makeDiamond('C'));
console.log(diamond.makeDiamond('D'));
console.log(diamond.makeDiamond('E'));