export const reverseString = (str = '') => {
  // Use the ES6 method to split the input string into single-character strings.
  const chars = Array.from(str);

  // Or use the ES6 spread syntax to split the input string into single-character strings.
  // const chars = [...str];

  return chars.reverse().join('');
  // Or
  // return ''.concat(...chars.reverse());
};
