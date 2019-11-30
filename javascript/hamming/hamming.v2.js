export const compute = (leftStrand, rightStrand) => {
  if (leftStrand === '' && rightStrand === '') return 0;

  if (leftStrand === '') throw new Error('left strand must not be empty');

  if (rightStrand === '') throw new Error('right strand must not be empty');

  if (leftStrand.length !== rightStrand.length) {
    throw new Error('left and right strands must be of equal length');
  }

  return Array.from(leftStrand).filter(
    (char, index) => char !== rightStrand[index]
  ).length;
};
