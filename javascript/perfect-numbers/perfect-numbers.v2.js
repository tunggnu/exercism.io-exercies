export const classify = (number) => {
  number = Number(number);

  if (!number || number < 1) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  if (number === 1) return 'deficient';

  let aliquotSum = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      aliquotSum += i;
    }
  }

  if (aliquotSum === number) return 'perfect';
  if (aliquotSum < number) return 'deficient';
  return 'abundant';
};
