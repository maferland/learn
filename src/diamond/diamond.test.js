const Diamond = require('./diamond');

describe('Diamond', () => {
  var diamond = new Diamond();

  test('test letter A', () => {
    var result = 'A\n';
    expect(diamond.makeDiamond('A')).toEqual(result);
  });

  test('test letter C', function () {
    var result = 
     ['  A  ',
      ' B B ',
      'C   C',
      ' B B ',
      '  A  '].join('\n') + '\n';
    expect(diamond.makeDiamond('C')).toEqual(result);
  });

  test('test letter E', () => {
    var result = 
     ['    A    ',
      '   B B   ',
      '  C   C  ',
      ' D     D ',
      'E       E',
      ' D     D ',
      '  C   C  ',
      '   B B   ',
      '    A    '].join('\n') + '\n';
    expect(diamond.makeDiamond('E')).toEqual(result);
  });
});