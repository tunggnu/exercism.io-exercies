export const classify = (number) => {
  number = Number(number);

  if (!number || number < 1) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  if (number === 1) return 'deficient';

  const sqrt = Math.floor(Math.sqrt(number));
  let aliquotSum = 0;

  for (let i = 1; i <= sqrt; i++) {
    if (number % i === 0) {
      aliquotSum += i + number / i;
    }
  }

  // Exclude the number itself and it's square root (if it is a square number).
  aliquotSum -= number + (sqrt ** 2 === number ? sqrt : 0);

  if (aliquotSum === number) return 'perfect';
  if (aliquotSum < number) return 'deficient';
  return 'abundant';
};
