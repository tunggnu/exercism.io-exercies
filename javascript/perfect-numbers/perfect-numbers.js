export const classify = (number) => {
  number = Number(number);

  if (!number || number < 1)
    throw new Error('Classification is only possible for natural numbers.');

  if (number === 1) return 'deficient';

  const factors = [];
  const sqrt = Math.floor(Math.sqrt(number));

  for (let i = 1; i <= sqrt; i++) {
    if (number % i === 0) {
      factors.push(i);
      factors.push(number / i);
    }
  }

  const aliquotSum =
    factors.reduce((sum, factor) => sum + factor, 0) -
    number -
    (sqrt ** 2 === number ? sqrt : 0);

  if (aliquotSum === number) return 'perfect';
  if (aliquotSum < number) return 'deficient';
  if (aliquotSum > number) return 'abundant';
};
