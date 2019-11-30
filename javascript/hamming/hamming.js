export const compute = (leftStrand, rightStrand) => {
  if (leftStrand === '' && rightStrand === '') return 0;

  if (leftStrand === '') throw new Error('left strand must not be empty');

  if (rightStrand === '') throw new Error('right strand must not be empty');

  if (leftStrand.length !== rightStrand.length) {
    throw new Error('left and right strands must be of equal length');
  }

  let distant = 0;

  for (let i = 0; i < leftStrand.length; i++) {
    if (leftStrand[i] !== rightStrand[i]) distant++;
  }

  return distant;
};
