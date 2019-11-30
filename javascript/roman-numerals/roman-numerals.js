const DECIMAL_TO_ROMAN = new Map([
  [1, 'I'],
  [2, 'II'],
  [3, 'III'],
  [4, 'IV'],
  [5, 'V'],
  [6, 'VI'],
  [7, 'VII'],
  [8, 'VIII'],
  [9, 'IX'],
  [10, 'X'],
  [20, 'XX'],
  [30, 'XXX'],
  [40, 'XL'],
  [50, 'L'],
  [60, 'LX'],
  [70, 'LXX'],
  [80, 'LXXX'],
  [90, 'XC'],
  [100, 'C'],
  [200, 'CC'],
  [300, 'CCC'],
  [400, 'CD'],
  [500, 'D'],
  [600, 'DC'],
  [700, 'DCC'],
  [800, 'DCCC'],
  [900, 'CM'],
  [1000, 'M'],
  [2000, 'MM'],
  [3000, 'MMM'],
]);

const destructingDecimal = (number) =>
  number
    .toString()
    .split('')
    .map((digit, index, arr) => digit * 10 ** (arr.length - index - 1))
    .filter((number) => number !== 0);

export const toRoman = (number) => {
  if (typeof number !== 'number') throw new Error('The input is not a number');

  return destructingDecimal(number)
    .map((number) => DECIMAL_TO_ROMAN.get(number))
    .join('');
};
